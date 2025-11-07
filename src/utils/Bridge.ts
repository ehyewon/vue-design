// src/utils/Bridge.ts

// 🎨 Implementor 인터페이스
export interface Color {
    applyColor(): void;
}

// ⚙️ Concrete Implementors
export class RedColor implements Color {
    applyColor(): void {
        console.log("🔴 빨간색으로 색칠");
    }
}

export class BlueColor implements Color {
    applyColor(): void {
        console.log("🔵 파란색으로 색칠");
    }
}

// 🏗️ Abstraction
export abstract class Shape {
    protected color: Color;

    constructor(color: Color) {
        this.color = color;
    }

    abstract draw(): void;
}

// 🧱 Refined Abstractions
export class Circle extends Shape {
    draw(): void {
        console.log("⭕ 원 그리기");
        this.color.applyColor();
    }
}

export class Square extends Shape {
    draw(): void {
        console.log("⬜ 사각형 그리기");
        this.color.applyColor();
    }
}

// ✅ 실행 예시
export function runBridgeExample(): void {
    const redCircle = new Circle(new RedColor());
    const blueSquare = new Square(new BlueColor());

    redCircle.draw();
    blueSquare.draw();
}
