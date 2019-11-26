import { createReduxSpace } from "bobril-redux";
import {RootState} from "./stateDefinition";

const { useDispatch, useSelector, StoreProvider} = createReduxSpace<RootState>();

export {
    useDispatch,
    useSelector,
    StoreProvider
};