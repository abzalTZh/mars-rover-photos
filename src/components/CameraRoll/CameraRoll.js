import { useSelector } from "react-redux";
import "./cameraroll.scss"

export default function CameraRoll() {
    const data = useSelector((state) => state.images.images)
    const status = useSelector((state) => state.images.status);

    if (status === "success") {
        return(
            <div className="gallery">
                {data.photos.map((photo) => (
                    <img className="gallery-item" src={photo.img_src} alt={`${photo.camera.full_name} ${photo.earth_date}`} key={photo.id} />
                ))}
            </div>
        )
    } else if (status === "rejected") {
        return(
            <div className="gallery gallery--error">
                Something went wrong, please review your server connection!
            </div>
        )
    }
}