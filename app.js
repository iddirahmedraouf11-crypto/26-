
// =====================================
// 1. الدروس
// =====================================

const lessons = [
    {
        title: "تعريف العصر الجاهلي",
        text: `العصر الجاهلي هو الفترة التي سبقت ظهور الإسلام في شبه الجزيرة العربية.
اشتهر العرب في هذه الفترة بالفصاحة والشعر والكرم والشجاعة.`
    },
    {
        title: "الحياة الاجتماعية",
        text: `اعتمد المجتمع الجاهلي على القبيلة.
وكانت القبيلة توفر الحماية لأفرادها.
ومن العادات المشهورة: الكرم والوفاء والشجاعة والثأر.`
    },
    {
        title: "الحياة السياسية",
        text: `لم تكن هناك دولة موحدة تجمع العرب.
كانت القبائل مستقلة، ولكل قبيلة شيخ أو زعيم.
وحدثت حروب ونزاعات بين بعض القبائل.`
    },
    {
        title: "الحياة الدينية",
        text: `انتشرت عبادة الأصنام عند كثير من العرب.
كما وُجدت جماعات من اليهود والنصارى والحنفاء.`
    },
    {
        title: "الحياة الأدبية",
        text: `ازدهر الشعر والخطابة في العصر الجاهلي.
وكان الشعر وسيلة للتعبير عن الفخر والحب والحكمة والهجاء والمدح.`
    },
    {
        title: "المعلقات",
        text: `المعلقات قصائد عربية طويلة ومشهورة من الشعر الجاهلي.
تتميز بقوة اللغة وجمال الصور الشعرية وتنوع الموضوعات.`
    }
];

function showLessons() {
    const content = document.getElementById("content");

    content.innerHTML = `
        <h1>دروس العصر الجاهلي</h1>
        <div class="card-container">
            ${lessons.map((lesson, index) => `
                <div class="card">
                    <h2>${lesson.title}</h2>
                    <p>${lesson.text}</p>
                </div>
            `).join("")}
        </div>
    `;
}


// =====================================
// 2. الشعراء
// =====================================

const poets = [
    {
        name: "امرؤ القيس",
        info: "من أشهر شعراء العصر الجاهلي، اشتهر بالغزل ووصف الطبيعة والرحلات."
    },
    {
        name: "طرفة بن العبد",
        info: "شاعر جاهلي مشهور، ومن أصحاب المعلقات، عُرف بالحكمة ووصف الحياة."
    },
    {
        name: "زهير بن أبي سلمى",
        info: "اشتهر بالحكمة والدعوة إلى الصلح ونبذ الحروب."
    },
    {
        name: "لبيد بن ربيعة",
        info: "شاعر فصيح، عُرف بقوة شعره وحكمته."
    },
    {
        name: "عنترة بن شداد",
        info: "شاعر وفارس جاهلي، اشتهر بالشجاعة والفخر والغزل."
    },
    {
        name: "عمرو بن كلثوم",
        info: "شاعر من قبيلة تغلب، اشتهر بالفخر والحماسة."
    },
    {
        name: "الحارث بن حلزة",
        info: "شاعر جاهلي من أصحاب المعلقات، اشتهر بقصيدته في الدفاع عن قومه."
    }
];

function showPoets() {
    const content = document.getElementById("content");

    content.innerHTML = `
        <h1>شعراء العصر الجاهلي</h1>
        ${poets.map(poet => `
            <div class="card">
                <h2>${poet.name}</h2>
                <p>${poet.info}</p>
            </div>
        `).join("")}
    `;
}


// =====================================
// 3. حاتم الطائي
// =====================================

function showHatim() {
    const content = document.getElementById("content");

    content.innerHTML = `
        <div class="card">
            <h1>حاتم الطائي</h1>
            <p>
                حاتم الطائي شاعر عربي جاهلي من قبيلة طيء،
                اشتهر بالكرم والجود وإكرام الضيف.
                وأصبح اسمه مثالاً يُضرب في الكرم.
            </p>

            <h2>من صفاته</h2>
            <ul>
                <li>الكرم والسخاء.</li>
                <li>إكرام الضيف.</li>
                <li>الشجاعة.</li>
                <li>مساعدة المحتاجين.</li>
            </ul>
        </div>
    `;
}


// =====================================
// 4. المعلقات السبع
// =====================================

function showMuallaqat() {
    const content = document.getElementById("content");

    content.innerHTML = `
        <h1>المعلقات السبع</h1>

        <p>اختر معلقة لقراءة أبياتها:</p>

        ${muallaqat.map((poem, index) => `
            <div class="card">
                <h2>${poem.title}</h2>
                <p>الشاعر: ${poem.poet}</p>

                <button onclick="openPoem(${index})">
                    قراءة المعلقة
                </button>
            </div>
        `).join("")}
    `;
}


// =====================================
// 5. فتح المعلقة وقراءة ملف TXT
// =====================================

async function openPoem(index) {
    const poem = muallaqat[index];
    const content = document.getElementById("content");

    if (!poem) {
        content.innerHTML = "<p>المعلقة غير موجودة.</p>";
        return;
    }

    content.innerHTML = `
        <div class="card">
            <h2>${poem.title}</h2>
            <p>جارٍ تحميل المعلقة...</p>
        </div>
    `;

    try {
        const response = await fetch(poem.file);

        if (!response.ok) {
            throw new Error(
                "تعذر العثور على الملف: " + poem.file +
                " (الخطأ " + response.status + ")"
            );
        }

        const poemText = await response.text();

        if (!poemText.trim()) {
            throw new Error("ملف المعلقة فارغ. أضف أبيات القصيدة إليه.");
        }

        content.innerHTML = `
            <div class="card">
                <h1>${poem.title}</h1>
                <h3>${poem.poet}</h3>

                <div class="controls">
                    <button onclick="changeFontSize(2)">تكبير الخط +</button>
                    <button onclick="changeFontSize(-2)">تصغير الخط -</button>
                    <button onclick="copyPoem()">نسخ القصيدة</button>
                </div>

                <input
                    type="text"
                    id="searchText"
                    placeholder="ابحث عن كلمة..."
                    oninput="searchInPoem()"
                >

                <div id="poemText" class="poem"></div>

                <button onclick="showMuallaqat()">
                    العودة إلى المعلقات
                </button>
            </div>
        `;

        const poemElement = document.getElementById("poemText");
        poemElement.textContent = poemText;
        poemElement.dataset.original = poemText;

    } catch (error) {
        content.innerHTML = `
            <div class="card">
                <h2>تعذر تحميل المعلقة</h2>
                <p>${error.message}</p>
                <button onclick="showMuallaqat()">العودة</button>
            </div>
        `;

        console.error(error);
    }
}


// =====================================
// 6. تغيير حجم الخط
// =====================================

function changeFontSize(amount) {
    const poem = document.getElementById("poemText");

    if (!poem) return;

    const currentSize = parseInt(
        window.getComputedStyle(poem).fontSize
    );

    const newSize = Math.max(12, Math.min(40, currentSize + amount));

    poem.style.fontSize = newSize + "px";
}


// =====================================
// 7. نسخ القصيدة
// =====================================

async function copyPoem() {
    const poem = document.getElementById("poemText");

    if (!poem) return;

    try {
        await navigator.clipboard.writeText(
            poem.dataset.original || poem.textContent
        );

        alert("تم نسخ القصيدة بنجاح!");
    } catch (error) {
        alert("تعذر النسخ. تحقق من صلاحيات المتصفح.");
    }
}


// =====================================
// 8. البحث داخل القصيدة
// =====================================

function searchInPoem() {
    const search = document.getElementById("searchText").value.trim();
    const poem = document.getElementById("poemText");

    if (!poem) return;

    const originalText = poem.dataset.original || poem.textContent;

    if (!search) {
        poem.textContent = originalText;
        return;
    }

    const escaped = search.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    const regex = new RegExp(escaped, "gi");

    const safeText = originalText.replace(
        /[&<>"']/g,
        char => ({
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            "'": "&#39;"
        })[char]
    );

    poem.innerHTML = safeText.replace(
        regex,
        match => `<mark>${match}</mark>`
    );
}


// =====================================
// 9. الاختبار
// =====================================

const questions = [
    {
        question: "ما المقصود بالعصر الجاهلي؟",
        options: [
            "الفترة التي سبقت الإسلام",
            "الفترة العباسية",
            "الفترة الأموية"
        ],
        answer: 0
    },
    {
        question: "ما أشهر فن أدبي في العصر الجاهلي؟",
        options: ["الرسم", "الشعر", "المسرح"],
        answer: 1
    },
    {
        question: "بماذا اشتهر حاتم الطائي؟",
        options: ["البخل", "الكرم", "الجبن"],
        answer: 1
    },
    {
        question: "كم عدد المعلقات المشهورة؟",
        options: ["سبع", "ثلاث", "عشر"],
        answer: 0
    },
    {
        question: "من الشاعر المعروف بالحكمة؟",
        options: ["زهير بن أبي سلمى", "حاتم الطائي", "عنترة بن شداد"],
        answer: 0
    },
    {
        question: "من الشاعر الفارس الذي اشتهر بالشجاعة؟",
        options: ["لبيد", "عنترة بن شداد", "الحارث بن حلزة"],
        answer: 1
    },
    {
        question: "ما الوحدة الأساسية للمجتمع الجاهلي؟",
        options: ["القبيلة", "المدينة الحديثة", "الدولة الموحدة"],
        answer: 0
    },
    {
        question: "ما اسم قصائد الشعر الجاهلي المشهورة؟",
        options: ["المعلقات", "الموشحات", "المقامات"],
        answer: 0
    }
];

let currentQuestion = 0;
let score = 0;

function startQuiz() {
    currentQuestion = 0;
    score = 0;
    showQuestion();
}

function showQuestion() {
    const content = document.getElementById("content");

    if (currentQuestion >= questions.length) {
        content.innerHTML = `
            <div class="card">
                <h1>انتهى الاختبار!</h1>
                <h2>نتيجتك: ${score} من ${questions.length}</h2>
                <button onclick="startQuiz()">إعادة الاختبار</button>
                <button onclick="home()">الرئيسية</button>
            </div>
        `;
        return;
    }

    const q = questions[currentQuestion];

    content.innerHTML = `
        <div class="card">
            <h2>السؤال ${currentQuestion + 1} من ${questions.length}</h2>
            <h3>${q.question}</h3>

            ${q.options.map((option, index) => `
                <button class="option" onclick="checkAnswer(${index})">
                    ${option}
                </button>
            `).join("")}
        </div>
    `;
}

function checkAnswer(selected) {
    const q = questions[currentQuestion];

    if (selected === q.answer) {
        score++;
        alert("إجابة صحيحة!");
    } else {
        alert("إجابة غير صحيحة. الإجابة الصحيحة: " + q.options[q.answer]);
    }

    currentQuestion++;
    showQuestion();
}


// =====================================
// 10. الصفحة الرئيسية
// =====================================

function home() {
    const content = document.getElementById("content");

    content.innerHTML = `
        <div class="card">
            <h1>رحلة إلى العصر الجاهلي</h1>

            <p>
                اكتشف تاريخ العرب قبل الإسلام،
                وتعرّف على حياتهم وشعرائهم وأشهر قصائدهم.
            </p>

            <button onclick="showLessons()">ابدأ التعلم</button>
        </div>
    `;
}


// =====================================
// 11. تثبيت التطبيق
// =====================================

let deferredPrompt;

window.addEventListener("beforeinstallprompt", event => {
    event.preventDefault();
    deferredPrompt = event;

    const installButton = document.getElementById("installButton");

    if (installButton) {
        installButton.style.display = "block";
    }
});

async function installApp() {
    if (!deferredPrompt) {
        alert("يمكنك تثبيت التطبيق من قائمة المتصفح إذا كان التثبيت متاحًا.");
        return;
    }

    deferredPrompt.prompt();

    await deferredPrompt.userChoice;

    deferredPrompt = null;
}


// =====================================
// 12. تشغيل الصفحة والتطبيق دون اتصال
// =====================================

document.addEventListener("DOMContentLoaded", () => {
    home();

    const installButton = document.getElementById("installButton");

    if (installButton) {
        installButton.addEventListener("click", installApp);
    }

    if ("serviceWorker" in navigator) {
        navigator.serviceWorker.register("./sw.js")
            .catch(error => {
                console.error("Service Worker error:", error);
            });
    }
});

