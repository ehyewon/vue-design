// src/utils/Singleton.ts

export default class Singleton {
    private static instance: Singleton | null = null;
    private static creating = false;

    private constructor() {
        console.log("✅ Singleton 인스턴스가 생성되었습니다.");
    }

    public static getInstance(): Singleton {
        if (Singleton.instance) return Singleton.instance;

        if (!Singleton.creating) {
            Singleton.creating = true;
            Singleton.instance = new Singleton();
            Singleton.creating = false;
        }

        return Singleton.instance!;
    }

    public sayHello(): void {
        console.log("👋 안녕하세요! 저는 싱글톤 인스턴스입니다.");
    }
}
