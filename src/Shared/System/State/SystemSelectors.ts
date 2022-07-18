import { SystemStateInterface, SystemStateSelectorInterface } from '../SystemTypes';

export const systemStateSelector = ({ System }: SystemStateSelectorInterface) => System;

export const getUserRole = (systemState: SystemStateInterface) => (systemState.userInfo ? systemState.userInfo.role : undefined);
