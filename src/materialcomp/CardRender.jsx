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
    if (currpath === `/materials/cement`) {
        return (
            <>
                {
                    CementData.map((item) => {
                        return (<Card key={item.key} imgsrc={item.imgsrc} title={item.title} qty={item.qty} cost={item.cost} />);
                    })
                }
            </>
        );
    } else if (currpath === `/materials/bricks`) {
        return (
            <>
                {
                    BricksData.map((item) => {
                        return (<Card key={item.key} imgsrc={item.imgsrc} title={item.title} qty={item.qty} cost={item.cost} />);
                    })
                }
            </>
        );
    } else if (currpath === `/materials/steel`) {
        return (
            <>
                {
                    SteelData.map((item) => {
                        return (<Card key={item.key} imgsrc={item.imgsrc} title={item.title} qty={item.qty} cost={item.cost} />);
                    })
                }
            </>
        );
    } else if (currpath === `/materials/concrete`) {
        return (
            <>
                {
                    ConcreteData.map((item) => {
                        return (<Card key={item.key} imgsrc={item.imgsrc} title={item.title} qty={item.qty} cost={item.cost} />);
                    })
                }
            </>
        );
    } else if (currpath === `/materials/sand`) {
        return (
            <>
                {
                    SandData.map((item) => {
                        return (<Card key={item.key} imgsrc={item.imgsrc} title={item.title} qty={item.qty} cost={item.cost} />);
                    })
                }
            </>
        );
    } else if (currpath === `/materials/glass`) {
        return (
            <>
                {
                    GlassData.map((item) => {
                        return (<Card key={item.key} imgsrc={item.imgsrc} title={item.title} qty={item.qty} cost={item.cost} />);
                    })
                }
            </>
        );
    } else if (currpath === `/materials/timber`) {
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