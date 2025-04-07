/**
 * A component for displaying the `admission` attribute of an user entity.
 *
 * This component checks if the `admission` attribute exists on the `user` object. If `admission` is undefined,
 * the component returns `null` and renders nothing. Otherwise, it displays a placeholder message
 * and a JSON representation of the `admission` attribute.
 *
 * @component
 * @param {Object} props - The props for the UserAdmissionAttribute component.
 * @param {Object} props.user - The object representing the user entity.
 * @param {*} [props.user.admission] - The admission attribute of the user entity to be displayed, if defined.
 *
 * @returns {JSX.Element|null} A JSX element displaying the `admission` attribute or `null` if the attribute is undefined.
 *
 * @example
 * // Example usage:
 * const userEntity = { admission: { id: 1, name: "Sample Admission" } };
 *
 * <UserAdmissionAttribute user={userEntity} />
 */
import { AdmissionMediumCard } from "../../Admission/Components/AdmissionMediumCard"

export const UserAdmissionAttribute = ({user_admission}) => {
    const admission = {user_admission}
    // if (typeof admission === 'undefined') return null
    return (
        <>
            <AdmissionMediumCard admission={admission} />
        </>
    )
}