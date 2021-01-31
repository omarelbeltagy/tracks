import p1 from "./../logos/de_hub.png";
import p2 from "./../logos/eit_climate_kic.png";
import p3 from "./../logos/innogy_logo.png";
import p4 from "./../logos/invest_logo.png";
import p5 from "./../logos/startport_logo.svg";
import "./../App.css";





function PartnersFooter(){
return (
    <div style={{ margin:"10% 0 0",}}>
    <h1 style = {{textAlign:"left", margin:"3% 4% 0"}}> Partners, clients and supporters</h1>
    <img style={{ margin:"0 1%"}}src = {p1} />
    <img style={{ margin:"0 1%"}} src = {p2} />
    <img style={{ margin:"0 1%"}} src = {p3} />
    <img style={{ margin:"0 1%"}} src = {p4} />
    <img style={{ margin:"0 1%"}} src = {p5} />

    </div>
);
}

export default PartnersFooter;