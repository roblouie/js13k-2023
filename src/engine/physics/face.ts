import { EnhancedDOMPoint } from "@/engine/enhanced-dom-point";
import { calculateFaceNormal } from '@/engine/helpers';

export class Face {
  points: EnhancedDOMPoint[];
  normal: EnhancedDOMPoint;
  upperY: number;
  lowerY: number;
  originOffset: number;

  constructor(points: EnhancedDOMPoint[], normal?: EnhancedDOMPoint) {
    this.points = points;
    this.normal = normal ?? calculateFaceNormal(points);
    this.originOffset = -this.normal.dot(points[0]);
    const ys = points.map(point => point.y);
    this.upperY = Math.max(...ys);
    this.lowerY = Math.min(...ys);
  }
}
