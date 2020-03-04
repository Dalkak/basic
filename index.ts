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
} from "dalkak";

export default new Extension({
    name: "basic",
    types: {
        number: Type.typeof("number"),
        Vector: Type.fromConstructor(Vector),
        Event: Type.fromConstructor(Event),
        Pack: Type.fromConstructor(Pack),
        Block: Type.fromConstructor(Block),
        Thing: Type.fromConstructor(Thing),
        Type: Type.fromConstructor(Type),
        Project: Type.fromConstructor(Project),
        Variable: Type.fromConstructor(Variable),
    }
});