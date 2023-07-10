import { atom, useRecoilState, useResetRecoilState, useSetRecoilState } from "recoil";

const counterState = atom({ key: "counterState", default: 0 });

export const SetCounterAtom = () => useSetRecoilState(counterState) 
export const GetCounterAtom = () => useRecoilState(counterState)
export const ResetCounterAtom = () => useResetRecoilState(counterState)