/**
 * A component for displaying the `PaymentInfo` attribute of an user entity.
 *
 * This component checks if the `PaymentInfo` attribute exists on the `user` object. If `PaymentInfo` is undefined,
 * the component returns `null` and renders nothing. Otherwise, it displays a placeholder message
 * and a JSON representation of the `PaymentInfo` attribute.
 *
 * @component
 * @param {Object} props - The props for the UserPaymentInfoAttribute component.
 * @param {Object} props.user - The object representing the user entity.
 * @param {*} [props.user.PaymentInfo] - The PaymentInfo attribute of the user entity to be displayed, if defined.
 *
 * @returns {JSX.Element|null} A JSX element displaying the `PaymentInfo` attribute or `null` if the attribute is undefined.
 *
 * @example
 * // Example usage:
 * const userEntity = { PaymentInfo: { id: 1, name: "Sample PaymentInfo" } };
 *
 * <UserPaymentInfoAttribute user={userEntity} />
 */
import {PaymentInfoMediumCard} from "../../PaymentInfo/Components/PaymentInfoMediumCard"



export const UserPaymentInfoAttribute = ({paymentinfo}) => {
    const PaymentInfo = paymentinfo

    //commented bcs of type error
    //if (typeof PaymentInfo === Empty) return null
    return (
        <>
            <PaymentInfoMediumCard   paymentinfo={PaymentInfo} />
        </>
    )
}