import React from "react";
import BuilderCard from './BuildCard';
import BuilderData from "./BuilderData";

const BuilderDisplay = () => {
    return (
        <>
            <div style={{backgroundColor:'#f4ebd0'}}>
            {
                    BuilderData.map((item, ind) => {
                        return (<BuilderCard key={ind} city={item["CITY NAME"]} pname={item["PROJECT NAME"]} padd={item["PROJECT ADDRESS"]} bname={item["BUILDER NAME"]} cpname={item["BUILDER NAME"]} cpno={item["MOBILE NO. OF CONTACT PERSON"]} moname={item["MOBILE NO. OF CONTACT PERSON"]} mono={item["MARKETING OFFICER NO."]}/>);
                    })
            }
            </div>
        </>
    );
}
export default BuilderDisplay;