// src/utils/FactoryMethod.ts

/**
 * 🏭 Factory Method Pattern 예제
 *  - StorageCreator: 스토리지 객체 생성
 *  - TestDialog: 테스트 친화적 구조 예시
 */

// 🎯 Storage 인터페이스
export interface Storage {
    upload(file: string): void;
    download(id: string): void;
}

// ☁️ S3 구현체
export class S3Storage implements Storage {
    upload(file: string): void {
        console.log(`📤 S3에 ${file} 업로드 완료`);
    }
    download(id: string): void {
        console.log(`📥 S3에서 ${id} 다운로드`);
    }
}

// 🌥️ GCS 구현체
export class GCSStorage implements Storage {
    upload(file: string): void {
        console.log(`📤 GCS에 ${file} 업로드 완료`);
    }
    download(id: string): void {
        console.log(`📥 GCS에서 ${id} 다운로드`);
    }
}

// 🏭 Creator 클래스
export class StorageCreator {
    create(kind: "s3" | "gcs"): Storage {
        if (kind === "s3") return new S3Storage();
        return new GCSStorage();
    }
}

// 🧩 테스트 친화적 구조
export interface Button {
    render(): void;
    onClick(): void;
}

export abstract class Dialog {
    protected abstract createButton(): Button;

    renderDialog(): void {
        const button = this.createButton();
        button.render();
        button.onClick();
    }
}

export class TestDialog extends Dialog {
    protected createButton(): Button {
        return {
            render() {
                console.log("🧪 테스트용 버튼 렌더링");
            },
            onClick() {
                console.log("🧪 버튼 클릭 추적");
            },
        };
    }
}

// ✅ 테스트 함수 (main에서 불러서 실행)
export function runFactoryMethodExample(): void {
    const storageFactory = new StorageCreator();

    const s3 = storageFactory.create("s3");
    const gcs = storageFactory.create("gcs");

    s3.upload("data.csv");
    gcs.download("report.pdf");

    const dialog = new TestDialog();
    dialog.renderDialog();
}

