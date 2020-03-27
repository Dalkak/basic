import {
    Extension,
    Vector,
    Event,
    Pack,
    Block,
    Thing,
    Type,
    Project,
    Variable,
    Local,
} from "dalkak";

export default new Extension({
    name: "basic",
    types: {
        number: Type.typeof("number", Number),
        Vector: Type.fromConstructor(Vector),
        Event: Type.fromConstructor(
            Event, 
            (data, project) => project.events.value[data]
        ),
        Pack: Type.fromConstructor(Pack),
        Block: Type.fromConstructor(
            Block,
            (data, project) => project.pack.blocks.value[data]
        ),
        Thing: Type.fromConstructor(
            Thing,
            (data, project) => project.thingGroup.children.find(thing => thing.name == data)
        ),
        Type: Type.fromConstructor(
            Type,
            (data, project) => project.pack.types.value[data]
        ),
        Project: Type.fromConstructor(Project),
        Variable: Type.fromConstructor(
            Variable,
            (data, project, local = new Local(project.variables)) => local.getVariable(data)
        ),
    }
});