import { useSearchParams } from "react-router-dom";
import SelectedCity from "../components/selected-city/SelectedCity";

export default function SelectedCityRouter () {
    const [params] = useSearchParams();
    let lat = params.get('lat');
    let lon = params.get('lon');
    return (
        <SelectedCity coords={{lat, lon}}/>
    )
}