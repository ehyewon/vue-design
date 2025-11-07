// src/utils/Strategy.ts

// 💳 Strategy 인터페이스
export interface PaymentStrategy {
    pay(amount: number): void;
}

// 💰 Concrete Strategies
export class CreditCardPayment implements PaymentStrategy {
    pay(amount: number): void {
        console.log(`💳 신용카드로 ${amount}원 결제 완료`);
    }
}

export class PayPalPayment implements PaymentStrategy {
    pay(amount: number): void {
        console.log(`💻 PayPal로 ${amount}원 결제 완료`);
    }
}

export class CryptoPayment implements PaymentStrategy {
    pay(amount: number): void {
        console.log(`🪙 가상화폐로 ${amount}원 결제 완료`);
    }
}

// 🏗️ Context (전략 교체 가능)
export class PaymentContext {
    private strategy: PaymentStrategy;

    constructor(strategy: PaymentStrategy) {
        this.strategy = strategy;
    }

    setStrategy(strategy: PaymentStrategy): void {
        this.strategy = strategy;
    }

    executePayment(amount: number): void {
        this.strategy.pay(amount);
    }
}

// ✅ 실행 예시
export function runStrategyExample(): void {
    const context = new PaymentContext(new CreditCardPayment());
    context.executePayment(10000);

    context.setStrategy(new PayPalPayment());
    context.executePayment(20000);

    context.setStrategy(new CryptoPayment());
    context.executePayment(30000);
}
