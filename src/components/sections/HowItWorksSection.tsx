
import Image from "next/image"
import ThirdSectionImage from "../../../public/ThirdSectionImage.png"

export default function HowItWorksSection() {
    return (
        <div>
            <Image src={ThirdSectionImage} alt="Third section image" />
            <div>
                <p>Unlock Your Advantage with Foliofy</p>
                <div>
                    <p>Create, edit, and download your resume right from your phone</p>
                </div>
            </div>
        </div>
    )
}
