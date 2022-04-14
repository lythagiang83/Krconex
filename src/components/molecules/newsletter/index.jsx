import { Description } from "../../atoms/description"
import { Input } from "../../atoms/input"
import { Title } from "../../atoms/title"

export const Newsletter = ({className=""}) => {
    return(
        <div className={`m-newsletter ${className}`}>
            <div className="m-newsletter__bg">
                <div className="m-newsletter__content">
                    <Title className="m-newsletter__title">Subscibe Newsletter</Title>
                    <Description className="m-newsletter__description">Subscribe to our email and get updates right in your inbox</Description>
                    <Input/>
                </div>
                <img src="images/collections/girls.png" alt="" />
            </div>
        </div>
    )
}