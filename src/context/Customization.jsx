import { createContext, useContext, useState } from "react";

const CustomizationContext = createContext ({});

export const MazeColors = [
    {
        color:"#a55341",
        name:"brown",
    },
    {
        color:"#43ae77",
        name:"green",
    },
    {
        color:"#27e1cf",
        name:"blue",
    },
    {
        color:"#bc4aed",
        name:"mauve",
    },
    {
        color:"#ffa500",
        name:"orange",
    },
    {
        color:"#8a848d",
        name:"grey",
    },
    {
        color:"#222222",
        name:"black",
    },
    {
        color:"#ececec",
        name:"white",
    }
];

export const GlassColors = [
    {
        color:"#ddb09f",
        name:"brown",
    },
    {
        color:"#a5f3a5",
        name:"green",
    },
    {
        color:"#a4d0ed",
        name:"blue",
    },
    {
        color:"#c198d3",
        name:"mauve",
    },
    {
        color:"#ffa500",
        name:"orange",
    },
    {
        color:"#bcb8be",
        name:"grey",
    },
    {
        color:"#ececec",
        name:"white",
    }
];

export const CustomizationProvider = (props) => {
    const [material, setMaterial] = useState("Plastic");
    const [mazeColor, setMazeColor]  = useState(MazeColors[0]);
    const [glassColor, setGlassColor] = useState(GlassColors[0]);
    return (
        <CustomizationContext.Provider 
        value={{
            material,
            setMaterial,
            mazeColor,
            setMazeColor,
            glassColor,
            setGlassColor,
        }}>
            {props.children}
        </CustomizationContext.Provider>
    );
};

export const useCustomization = () => {
    const context = useContext(CustomizationContext);
    return context;
}