import { useSelector } from "react-redux";
import {type AppDispatch, type RootState } from "../redux/store";
import { useDispatch } from "react-redux";

export const useAppSelector=useSelector.withTypes<RootState>()
export const useAppDispatch=useDispatch.withTypes<AppDispatch>()