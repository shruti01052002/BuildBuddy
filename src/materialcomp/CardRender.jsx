import React from "react";
import CementData from "./CementData";
import BricksData from "./BricksData";
import SteelData from "./SteelData";
import SandData from "./SandData";
import GlassData from "./GlassData";
import TimberData from "./TimberData";
import ConcreteData from "./ConcreteData";
import { useLocation } from "react-router-dom";
import Card from "./Card";

const CardRender = () => {
    const location = useLocation();
    const currpath = location.pathname;
    if (currpath === `/BuildBuddy/materials/cement`) {
        return (
            <>
                {
                    CementData.map((item) => {
                        return (<Card key={item.key} imgsrc={item.imgsrc} title={item.title} qty={item.qty} cost={item.cost} />);
                    })
                }
            </>
        );
    } else if (currpath === `/BuildBuddy/materials/bricks`) {
        return (
            <>
                {
                    BricksData.map((item) => {
                        return (<Card key={item.key} imgsrc={item.imgsrc} title={item.title} qty={item.qty} cost={item.cost} />);
                    })
                }
            </>
        );
    } else if (currpath === `/BuildBuddy/materials/steel`) {
        return (
            <>
                {
                    SteelData.map((item) => {
                        return (<Card key={item.key} imgsrc={item.imgsrc} title={item.title} qty={item.qty} cost={item.cost} />);
                    })
                }
            </>
        );
    } else if (currpath === `/BuildBuddy/materials/concrete`) {
        return (
            <>
                {
                    ConcreteData.map((item) => {
                        return (<Card key={item.key} imgsrc={item.imgsrc} title={item.title} qty={item.qty} cost={item.cost} />);
                    })
                }
            </>
        );
    } else if (currpath === `/BuildBuddy/materials/sand`) {
        return (
            <>
                {
                    SandData.map((item) => {
                        return (<Card key={item.key} imgsrc={item.imgsrc} title={item.title} qty={item.qty} cost={item.cost} />);
                    })
                }
            </>
        );
    } else if (currpath === `/BuildBuddy/materials/glass`) {
        return (
            <>
                {
                    GlassData.map((item) => {
                        return (<Card key={item.key} imgsrc={item.imgsrc} title={item.title} qty={item.qty} cost={item.cost} />);
                    })
                }
            </>
        );
    } else if (currpath === `/BuildBuddy/materials/timber`) {
        return (
            <>
                {
                    TimberData.map((item) => {
                        return (<Card key={item.key} imgsrc={item.imgsrc} title={item.title} qty={item.qty} cost={item.cost} />);
                    })
                }
            </>
        );
    }
}

export default CardRender;