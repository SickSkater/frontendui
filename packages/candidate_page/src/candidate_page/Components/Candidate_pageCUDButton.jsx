import { ButtonWithDialog, ErrorHandler, LoadingSpinner } from "@hrbolek/uoisfrontend-shared";
// import { InsertCandidate_pageButton } from "./CUDButtons/InsertCandidate_pageButton";
// import { UpdateCandidate_pageButton } from "./CUDButtons/UpdateCandidate_pageButton";
// import { DeleteCandidate_pageButton } from "./CUDButtons/DeleteCandidate_pageButton";
import { useAsyncAction } from "@hrbolek/uoisfrontend-gql-shared";

/**
 * Candidate_pageCUDButton Component
 *
 * A higher-order component that dynamically renders one of the following components
 * based on the `operation` prop:
 * - `InsertCandidate_pageButton` for creating a new item (operation "C")
 * - `UpdateCandidate_pageButton` for updating an existing item (operation "U")
 * - `DeleteCandidate_pageButton` for deleting an existing item (operation "D")
 *
 * This component validates the `candidate_page` prop:
 * - For "C" (create), `candidate_page` can be any object (no restrictions).
 * - For "U" (update) and "D" (delete), `candidate_page` must include an `id` key.
 *
 * If the `operation` prop is invalid or required conditions for `candidate_page` are not met,
 * an `ErrorHandler` component is rendered with an appropriate error message.
 *
 * @component
 * @param {Object} props - The props for the Candidate_pageCUDButton component.
 * @param {string} props.operation - The operation type ("C" for create, "U" for update, "D" for delete).
 * @param {React.ReactNode} props.children - The content or label for the button.
 * @param {Object} props.candidate_page - The parameters for the operation. For "U" and "D", it must include an `id` key.
 * @param {string} [props.candidate_page.id] - The unique identifier for the item (required for "U" and "D").
 * @param {string} [props.candidate_page.name] - The name of the item (optional).
 * @param {string} [props.candidate_page.name_en] - The English name of the item (optional).
 * @param {Function} [props.onDone=(candidate_page) => {}] - Callback executed after the operation completes. Receives the `candidate_page` object.
 * @param {...Object} props - Additional props passed to the underlying button components.
 *
 * @example
 * // Example Usage
 * const Example = () => {
 *   const handleDone = (data) => console.log("Operation completed:", data);
 *
 *   return (
 *     <>
 *       <Candidate_pageCUDButton
 *         operation="C"
 *         candidate_page={{ name: "New Item", name_en: "New Item EN" }}
 *         onDone={handleDone}
 *       >
 *         Insert
 *       </Candidate_pageCUDButton>
 *
 *       <Candidate_pageCUDButton
 *         operation="U"
 *         candidate_page={{ id: "123", name: "Updated Item", name_en: "Updated Item EN" }}
 *         onDone={handleDone}
 *       >
 *         Update
 *       </Candidate_pageCUDButton>
 *
 *       <Candidate_pageCUDButton
 *         operation="D"
 *         candidate_page={{ id: "123" }}
 *         onDone={handleDone}
 *       >
 *         Delete
 *       </Candidate_pageCUDButton>
 *     </>
 *   );
 * };
 *
 * @returns {JSX.Element} The dynamically selected button component for the specified operation.
 */
export const Candidate_pageButton = ({ operation, children, candidate_page, onDone = () => {}, ...props }) => {
    const operationConfig = {
        C: {
            asyncAction: Candidate_pageInsertAsyncAction,
            dialogTitle: "Vložit novou candidate_page",
            loadingMsg: "Vkládám novou candidate_page",
            renderContent: () => <Candidate_pageMediumEditableContent candidate_page={candidate_page} />,
        },
        U: {
            asyncAction: Candidate_pageUpdateAsyncAction,
            dialogTitle: "Upravit candidate_page",
            loadingMsg: "Ukládám candidate_page",
            renderContent: () => <Candidate_pageMediumEditableContent candidate_page={candidate_page} />,
        },
        D: {
            asyncAction: Candidate_pageDeleteAsyncAction,
            dialogTitle: "Chcete odebrat candidate_page?",
            loadingMsg: "Odstraňuji candidate_page",
            renderContent: () => (
                <h2>
                    {candidate_page?.name} ({candidate_page?.name_en})
                </h2>
            ),
        },
    };

    if (!operationConfig[operation]) {
        return <ErrorHandler errors={`Invalid operation value: '${operation}'. Must be one of 'C', 'U', or 'D'.`} />;
    }

    const { asyncAction, dialogTitle, loadingMsg, renderContent } = operationConfig[operation];

    const { error, loading, fetch, entity } = useAsyncAction(asyncAction, candidate_page, { deferred: true });
    const handleClick = async (params = {}) => {
        const fetchParams = { ...candidate_page, ...params };
        const freshCandidate_page = await fetch(fetchParams);
        onDone(freshCandidate_page); // Pass the result to the external callback
    };

    // Validate required fields for "U" and "D"
    if ((operation === 'U' || operation === 'D') && !candidate_page?.id) {
        return <ErrorHandler errors={`For '${operation}' operation, 'candidate_page' must include an 'id' key.`} />;
    }

    return (<>
        {error && <ErrorHandler errors={error} />}
        {loading && <LoadingSpinner text={loadingMsg} />}
        <ButtonWithDialog
            buttonLabel={children}
            dialogTitle={dialogTitle}
            {...props}
            params={candidate_page}
            onClick={handleClick}
        >
            {renderContent()}
        </ButtonWithDialog>
    </>);
};

// // Prop validation using PropTypes
// Candidate_pageCUDButton.propTypes = {
//     /** The operation to perform: "C" for create, "U" for update, "D" for delete. */
//     operation: PropTypes.oneOf(['C', 'U', 'D']).isRequired,
//     /** The label or content for the button. */
//     children: PropTypes.node,
//     /** The parameters for the operation. */
//     candidate_page: PropTypes.shape({
//         id: PropTypes.string, // Required for "U" and "D" operations
//         name: PropTypes.string,
//         name_en: PropTypes.string,
//     }).isRequired,
//     /** Callback executed after the operation completes. Receives the `candidate_page` object. */
//     onDone: PropTypes.func,
// };

// // Default props
// Candidate_pageCUDButton.defaultProps = {
//     onDone: () => {},
// };