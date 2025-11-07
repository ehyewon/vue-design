// src/utils/Builder.ts

// 🎯 Product (최종 생성물)
export class Computer {
    constructor(
        public cpu: string = "",
        public gpu: string = "",
        public ram: string = "",
        public storage: string = ""
    ) { }

    spec(): void {
        console.log(
            `🖥️ Computer Spec → CPU: ${this.cpu}, GPU: ${this.gpu}, RAM: ${this.ram}, STORAGE: ${this.storage}`
        );
    }
}

// 🏗️ Builder 인터페이스
export interface ComputerBuilder {
    setCPU(cpu: string): this;
    setGPU(gpu: string): this;
    setRAM(ram: string): this;
    setStorage(storage: string): this;
    build(): Computer;
}

// 🧩 Concrete Builder
export class GamingComputerBuilder implements ComputerBuilder {
    private computer: Computer;

    constructor() {
        this.computer = new Computer();
    }

    setCPU(cpu: string): this {
        this.computer.cpu = cpu;
        return this;
    }

    setGPU(gpu: string): this {
        this.computer.gpu = gpu;
        return this;
    }

    setRAM(ram: string): this {
        this.computer.ram = ram;
        return this;
    }

    setStorage(storage: string): this {
        this.computer.storage = storage;
        return this;
    }

    build(): Computer {
        return this.computer;
    }
}

// 🧠 Director (생성 순서 관리)
export class Director {
    static buildHighEndPC(builder: ComputerBuilder): Computer {
        return builder
            .setCPU("Intel i9")
            .setGPU("RTX 4090")
            .setRAM("64GB")
            .setStorage("2TB SSD")
            .build();
    }

    static buildOfficePC(builder: ComputerBuilder): Computer {
        return builder
            .setCPU("Intel i5")
            .setGPU("Integrated Graphics")
            .setRAM("16GB")
            .setStorage("512GB SSD")
            .build();
    }
}

// ✅ 실행 예시
export function runBuilderExample(): void {
    const builder = new GamingComputerBuilder();

    const gamingPC = Director.buildHighEndPC(builder);
    const officePC = Director.buildOfficePC(builder);

    gamingPC.spec();
    officePC.spec();
}
