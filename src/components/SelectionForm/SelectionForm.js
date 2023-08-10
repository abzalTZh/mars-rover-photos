import { useDispatch } from "react-redux";
import { useState } from "react";
import Button from "../Button/Button";
import { fetchImages } from "../../features/images/imagesSlice";
import "./selectionform.scss";

export default function SelectionForm() {
    const dispatch = useDispatch();
    const [camera, setCamera] = useState("FHAZ");
    const [date, setDate] = useState("");

    async function handleSubmit(e) {
        e.preventDefault();

        const form = e.target;
        const formData = new FormData(form);

        const formJson = Object.fromEntries(formData.entries());
    
        await dispatch(fetchImages({
            apiKey: "Qz5OD96oh9G7P9AVZtF1LIEqjSpCivx4l2CsGXsw", 
            camera: formJson.rovers.toLowerCase(), 
            date: formJson.date
        }));
    }


    return(
        <form className="form-container" onSubmit={handleSubmit}>
            <label htmlFor="rovers">Rover Camera</label>
            <select 
                id="rovers" 
                className="form-container__rover-picker" name="rovers" 
                value={camera}
                onChange={e => setCamera(e.target.value)}
            >
                <option value={"FHAZ"}>Front Hazard Avoidance Camera</option>
                <option value={"RHAZ"}>Rear Hazard Avoidance Camera</option>
                <option value={"MAST"}>Mast Camera</option>
                <option value={"CHEMCAM"}>Chemistry and Camera Complex</option>
                <option value={"MAHLI"}>Mars Hand Lens Imager</option>
                <option value={"MARDI"}>Mars Hand Lens Imager</option>
                <option value={"NAVCAM"}>Mars Hand Lens Imager</option>
                <option value={"PANCAM"}>Panoramic Camera</option>
                <option value={"MINITES"}>Miniature Thermal Emission Spectrometer (Mini-TES)</option>
            </select>

            <label htmlFor="date">Date</label>
            <input 
                type="date" 
                id="date" 
                className="form-container__date-picker" 
                name="date" 
                value={date}
                onChange={e => setDate(e.target.value)}
            />

            <Button className="form-container__explore-btn" title="Explore" />
        </form>
    )
}