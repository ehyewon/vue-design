// src/utils/Singleton.ts

export default class Singleton {
    private static instance: Singleton | null = null;
    private static creating = false;

    // 외부에서 new Singleton() 방지
    private constructor() {
        console.log("✅ Singleton 인스턴스가 생성되었습니다.");
    }

    // 인스턴스 반환 (lazy initialization)
    public static getInstance(): Singleton {
        if (Singleton.instance === null) {
            if (!Singleton.creating) {
                Singleton.creating = true;
                Singleton.instance = new Singleton();
                Singleton.creating = false;
            }
        }
        return Singleton.instance!;
    }

    // ✅ 예시 메서드 (요청한 say 버전)
    public say(): void {
        console.log("lazy로 생성된 싱글톤입니다 👋");
    }
}
