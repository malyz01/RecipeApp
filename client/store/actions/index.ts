import { Types } from '../types';

export default function setReducer(type: Types, payload?: {}) {
  return { type, payload };
}
