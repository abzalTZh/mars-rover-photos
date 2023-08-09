import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import Button from "../Button/Button";
import { fetchImages } from "../../features/images/imagesSlice";
import "./selectionform.scss";

export default function SelectionForm() {
    const dispatch = useDispatch();

    async function handleSubmit(e) {
        e.preventDefault();
        const roverPicker = document.querySelector(".form-container__rover-picker");
        const datePicker = document.querySelector(".form-container__date-picker");
    
        const camera = roverPicker.value.toLowerCase();
        const date = datePicker.value;
    
        console.log(await dispatch(fetchImages("Qz5OD96oh9G7P9AVZtF1LIEqjSpCivx4l2CsGXsw", camera, date)));
    }

    const data = useSelector((state) => state.images.data)
    const status = useSelector((state) => state.images.status);


    return(
        <form className="form-container" onSubmit={handleSubmit}>
            <label htmlFor="rovers">Rover Camera</label>
            <select id="rovers" className="form-container__rover-picker" name="rovers" >
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
            <input type="date" id="date" className="form-container__date-picker" name="date" />

            <Button className="form-container__explore-btn" title="Explore" />
        </form>
    )
}