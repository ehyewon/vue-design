// src/utils/Adaptor.ts

// 1️⃣ Target 인터페이스 (클라이언트가 기대하는 인터페이스)
export interface OldPaymentProcessor {
    pay(amount: number): void;
}

// 2️⃣ Adaptee (새로운 클래스, 기존 인터페이스와 호환되지 않음)
export class NewPaymentGateway {
    makePayment(value: number): void {
        console.log(`${value}원을 새 결제 게이트웨이로 처리함`);
    }
}

// 3️⃣ Adapter (Target을 구현하고, 내부적으로 Adaptee 호출)
export class PaymentAdapter implements OldPaymentProcessor {
    private gateway: NewPaymentGateway;

    constructor(gateway: NewPaymentGateway) {
        this.gateway = gateway;
    }

    pay(amount: number): void {
        // 내부적으로 새 API 호출
        this.gateway.makePayment(amount);
    }
}

// 4️⃣ 클라이언트 함수
export function processPayment(processor: OldPaymentProcessor, amount: number) {
    processor.pay(amount);
}
