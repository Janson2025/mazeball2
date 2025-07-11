import { GlassColors, MazeColors, useCustomization } from "../context/Customization";

const Configurator = () => {
    const {material, 
        setMaterial, 
        mazeColor, 
        setMazeColor, 
        glassColor, 
        setGlassColor} = useCustomization();

    return (<div className="configurator">
        <div className="configurator_section">
            <div className="configurator_section_title">Maze pattern</div>
            <div className="configurator_section_values">
                <div className={`item ${material === "Plastic" ? "item--active" : ""}`} onClick={() => setMaterial('Plastic')}>
                    <div className="item_label">veins</div>
                </div>
                <div className={`item ${material === "Glass" ? "item--active" : ""}`} onClick={() => setMaterial('Glass')}>
                    <div className="item_label">swirls</div>
                </div>
            </div>
        </div>
        <div className="configurator_section">
            <div className="configurator_section_title">Maze color</div>
            <div className="configurator_section_values">
                { MazeColors.map((item, index) => (
                    <div 
                        key={index}
                        className={`item ${item.color === mazeColor.color ? "item--active" : ""}`}
                        onClick={() => setMazeColor(item)}
                    >
                    <div 
                        className="item_dot" 
                        style={{
                            backgroundColor: item.color
                        }}
                    />
                       <div className="item_label">{item.name}</div> 
                    </div>
                ))}
            </div>
        </div>
        <div className="configurator_section">  
            <div className="configurator_section_title">Glass color</div>
            <div className="configurator_section_values">
                { GlassColors.map((item, index) => (
                    <div 
                        key={index}
                        className={`item ${item.color === glassColor.color ? "item--active" : ""}`}
                        onClick={() => setGlassColor(item)}
                    >
                    <div 
                        className="item_dot" 
                        style={{
                            backgroundColor: item.color
                        }}
                    />
                       <div className="item_label">{item.name}</div> 
                    </div>
                ))}
            </div>
        </div>
    </div>)
}

export default Configurator;