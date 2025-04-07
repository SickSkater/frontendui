import { createAsyncGraphQLAction, processVectorAttributeFromGraphQLResult } from "@hrbolek/uoisfrontend-gql-shared"
import { InfiniteScroll } from "@hrbolek/uoisfrontend-shared"

/**
 * A component for displaying the `payments` attribute of an user entity.
 *
 * This component checks if the `payments` attribute exists on the `user` object. If `payments` is undefined,
 * the component returns `null` and renders nothing. Otherwise, it maps over the `payments` array and
 * displays a placeholder message and a JSON representation for each item in the `payments`.
 *
 * @component
 * @param {Object} props - The props for the UserPaymentsAttribute component.
 * @param {Object} props.user - The object representing the user entity.
 * @param {Array} [props.user.payments] - An array of payments items associated with the user entity.
 * Each item is expected to have a unique `id` property.
 *
 * @returns {JSX.Element|null} A JSX element displaying the `payments` items or `null` if the attribute is undefined.
 *
 * @example
 * // Example usage:
 * const userEntity = { 
 *   payments: [
 *     { id: 1, name: "Payment Item 1" }, 
 *     { id: 2, name: "Payment Item 2" }
 *   ] 
 * };
 *
 * <UserPaymentsAttribute user={userEntity} />
 */
import { PaymentMediumCard } from "../../Payment/Components/PaymentMediumCard"

export const UserPaymentsAttribute = ({student}) => {
    const { payments } = student
    if (typeof payments === 'undefined') return null
    return (
        <>
            {payments.map(
                payment => <div id={payment.id} key={payment.id}>
                    <br/>
                    Tady to je vektorovej parametr a z nejakyho duvodu se tam nezobrazujou vsechny platby ale jen jedna:
                    <PaymentMediumCard payment={payment} />' <br />
                </div>
            )}
        </>
    )
}

const PaymentsAttributeQuery = `
query UserQueryRead($id: id, $where: PaymentInputFilter, $skip: Int, $limit: Int) {
    result: userById(id: $id) {
        __typename
        id
        payments(skip: $skip, limit: $limit, where: $where) {
            __typename
            id
        }
    }
}
`

const PaymentsAttributeAsyncAction = createAsyncGraphQLAction(
    PaymentsAttributeQuery,
    processVectorAttributeFromGraphQLResult("payments")
)

export const UserPaymentsAttributeInifite = ({user}) => { 
    const {payments} = user

    return (
        <InfiniteScroll 
            Visualiser={'PaymentMediumCard'} 
            actionParams={{skip: 0, limit: 10}}
            asyncAction={PaymentsAttributeAsyncAction}
        />
    )
}