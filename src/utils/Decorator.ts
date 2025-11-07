// 1. Component 인터페이스
export interface Notifier {
    send(message: string): void;
}

// 2. Concrete Component (기본 기능)
export class BaseNotifier implements Notifier {
    send(message: string): void {
        console.log(`기본 알림: ${message}`);
    }
}

// 3. Decorator 추상 클래스
export abstract class NotifierDecorator implements Notifier {
    protected wrappee: Notifier;

    constructor(notifier: Notifier) {
        this.wrappee = notifier;
    }

    send(message: string): void {
        this.wrappee.send(message); // 기존 기능 위임
    }
}

// 4. 구체적인 데코레이터들
export class EmailNotifier extends NotifierDecorator {
    send(message: string): void {
        super.send(message);
        console.log(`이메일 발송: ${message}`);
    }
}

export class SMSNotifier extends NotifierDecorator {
    send(message: string): void {
        super.send(message);
        console.log(`SMS 발송: ${message}`);
    }
}

export class SlackNotifier extends NotifierDecorator {
    send(message: string): void {
        super.send(message);
        console.log(`Slack 발송: ${message}`);
    }
}

// ✅ export 꼭 있어야 함!
export function runDecoratorExample(): void {
    let notifier: Notifier = new BaseNotifier();

    notifier = new EmailNotifier(notifier);
    notifier = new SMSNotifier(notifier);
    notifier = new SlackNotifier(notifier);

    notifier.send("긴급 서버 장애 발생!");
}
