// <script>
document.addEventListener("DOMContentLoaded", () => {
  const header = document.querySelector("header");
  let lastScrollY = window.scrollY;

  window.addEventListener("scroll", () => {
    const currentScrollY = window.scrollY;

    if (currentScrollY > lastScrollY) {
      // 아래로 스크롤 중
      header.classList.add("scroll-down");
      header.classList.remove("scroll-up");
    } else {
      // 위로 스크롤 중
      header.classList.add("scroll-up");
      header.classList.remove("scroll-down");
    }

    lastScrollY = currentScrollY;
  });
});
// </script>

// FAQ 토글 기능
document.addEventListener("DOMContentLoaded", function () {
  const faqItems = document.querySelectorAll(".faq-item");

  faqItems.forEach((item) => {
    const question = item.querySelector(".faq-question");
    const answer = item.querySelector(".faq-answer");
    const plus = item.querySelector(".plus");

    question.addEventListener("click", () => {
      // 현재 답변 표시 상태 확인
      const isOpen = answer.style.display === "block";

      // 모든 FAQ 항목 닫기
      faqItems.forEach((otherItem) => {
        const otherAnswer = otherItem.querySelector(".faq-answer");
        const otherPlus = otherItem.querySelector(".plus");

        otherAnswer.style.display = "none";
        otherPlus.textContent = "+";
      });

      // 현재 항목이 닫혀있었다면 열기
      if (!isOpen) {
        answer.style.display = "block";
        plus.textContent = "-";
      }
    });
  });
});

// 기능 아이템 호버 효과 강화
const featureItems = document.querySelectorAll(".feature-item");

featureItems.forEach((item) => {
  item.addEventListener("mouseenter", () => {
    const icon = item.querySelector(".icon-center");
    icon.style.transform = "scale(1.2)";
    icon.style.transition = "transform 0.3s ease";
  });

  item.addEventListener("mouseleave", () => {
    const icon = item.querySelector(".icon-center");
    icon.style.transform = "scale(1)";
  });
});

//reux 단어 순차 재생
document.addEventListener("DOMContentLoaded", () => {
  // GSAP 애니메이션 초기 설정
  gsap.set(".concept-item h3", {
    opacity: 0,
    y: 40,
  });

  // ScrollTrigger로 화면 도달 시 애니메이션 실행
  gsap.to(".concept-item h3", {
    y: 0,
    opacity: 1,
    duration: 1,
    ease: "power2.out",
    stagger: 0.3,
    // ScrollTrigger 설정
    scrollTrigger: {
      trigger: ".reux-concept",
      start: "top 80%",
      toggleActions: "play none none none", 
  }});
});

// 스크롤 애니메이션
window.addEventListener("scroll", () => {
  const sections = document.querySelectorAll("section");

  sections.forEach((section) => {
    // ✅ 제외할 섹션 조건
    if (
      section.classList.contains("comparisonSection") ||
      section.classList.contains("fixed-section") ||
      section.classList.contains("reux-concept")
    )
      return;

    // 화면 상단 기준으로 섹션의 위치 계산
    const sectionTop = section.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    //섹션이 화면 아래 75% 안쪽에 들어오면 나타나게 함
    if (sectionTop < windowHeight * 0.75) {
      section.style.opacity = "1";
      section.style.transform = "translateY(0)";
    }
  });
});

// 초기 섹션 스타일 설정
document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll("section");

  sections.forEach((section) => {
    // ✅ 제외할 섹션 조건
    if (
      section.classList.contains("comparisonSection") ||
      section.classList.contains("fixed-section") ||
      section.classList.contains("reux-concept")
    )
      return;

    section.style.opacity = "0";
    section.style.transform = "translateY(20px)";
    section.style.transition = "opacity 0.6s ease, transform 0.6s ease";
  });

  // 초기 로드 시 강제 스크롤 처리
  setTimeout(() => {
    window.dispatchEvent(new Event("scroll"));
  }, 100);
});

//가로 슬라이드 2
gsap.registerPlugin(ScrollTrigger);

gsap.utils.toArray(".comparisonSection").forEach((section) => {
  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: section,
      start: "center center",
      end: () => "+=" + section.offsetWidth,
      scrub: true,
      pin: true,
      anticipatePin: 1,
    },
    defaults: { ease: "none" },
  });

  tl.fromTo(
    section.querySelector(".afterImage"),
    { xPercent: 100, x: 0 },
    { xPercent: 0 }
  ).fromTo(
    section.querySelector(".afterImage img"),
    { xPercent: -100, x: 0 },
    { xPercent: 0 },
    0
  );
});

// 컨설팅 폼 제출 처리
document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector(".form-container");

  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();

      // 폼 데이터 수집 로직을 여기에 추가할 수 있습니다
      alert("상담 신청이 완료되었습니다. 빠른 시일 내에 연락 드리겠습니다.");
      form.reset();
    });
  }
});

// 스크롤 시 헤더 스타일 변경
window.addEventListener("scroll", () => {
  const header = document.querySelector("header");

  if (window.scrollY > 50) {
    header.style.background = "rgba(3, 0, 5, 0.9)";
    header.style.backdropFilter = "blur(10px)";
    header.style.boxShadow = "0 2px 10px rgba(0, 0, 0, 0.1)";
  } else {
    header.style.background = "transparent";
    header.style.backdropFilter = "none";
    header.style.boxShadow = "none";
  }
});

// 모바일 메뉴 토글 기능 (필요한 경우 추가)
document.addEventListener("DOMContentLoaded", () => {
  const logo = document.querySelector(".logo");

  if (logo && window.innerWidth < 768) {
    logo.addEventListener("click", () => {
      const nav = document.querySelector("nav");

      if (nav) {
        nav.style.display = nav.style.display === "flex" ? "none" : "flex";
        nav.style.position = "absolute";
        nav.style.top = "70px";
        nav.style.left = "0";
        nav.style.right = "0";
        nav.style.background = "#030005";
        nav.style.flexDirection = "column";
        nav.style.padding = "1rem";
        nav.style.zIndex = "100";
      }
    });
  }
});
//ux intro video 재생
document.addEventListener("DOMContentLoaded", () => {
  const introVideo = document.getElementById("introVideo");
  const loopVideo = document.getElementById("loopVideo");

  if (!introVideo || !loopVideo) return;

  gsap.registerPlugin(ScrollTrigger);

  ScrollTrigger.create({
    trigger: ".ux-intro",
    start: "top 60%",
    once: true,
    onEnter: () => {
      introVideo
        .play()
        .catch((err) => console.warn("Intro video play failed:", err));
    },
  });

  // ✅ intro 재생 끝나면 loop 시작
  introVideo.addEventListener("ended", () => {
    introVideo.classList.add("hidden");
    loopVideo.classList.remove("hidden");

    // 🎯 loop 영상은 intro 끝난 후에만 재생
    loopVideo
      .play()
      .catch((err) => console.warn("Loop video play failed:", err));
  });
});

//패럴렉스 스크롤링 구간
document.addEventListener("DOMContentLoaded", () => {
  gsap.registerPlugin(ScrollTrigger);

  //각 요소에 대해 애니메이션 설정
  const elements = gsap.utils.toArray("#REUX_start div");

  //방향과 특수 조건 설정
  elements.forEach((el, index) => {
    const direction = index % 2 === 0 ? -150 : 150; 
    const verticalShift = index === 2 ? 50 : 0; 
    //등장 애니메이션 정의
    gsap.fromTo(
      el,
      { x: direction, y: verticalShift, opacity: 0 },
      {
        x: 0,
        y: 0,
        opacity: 1,
        duration: 2,
        ease: "power3.out",
        //ScrollTrigger 설정
        scrollTrigger: {
          trigger: el,
          start: "top 85%",
          end: "top 40%",
          scrub: 1.5, 
        },
      }
    );
  });
});

// badUX 팝업 닫기 기능
document.addEventListener("DOMContentLoaded", function () {
  const badClose = document.querySelector(".bad-close");
  const badPopup = document.querySelector(".bad-popup");

  if (badClose && badPopup) {
    badClose.addEventListener("click", () => {
      badPopup.style.display = "none";
    });

    // 3초 후에 팝업 다시 표시 (나쁜 UX 경험 강화)
    setTimeout(() => {
      badPopup.style.display = "block";
    }, 3000);
  }

  // badUX 카드 클릭 효과
  const badCards = document.querySelectorAll(".bad-card");
  badCards.forEach((card) => {
    card.addEventListener("click", () => {
      // 랜덤한 색상으로 변경 (일관성 없는 UI 표현)
      const randomColor = `rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(
        Math.random() * 255
      )}, ${Math.floor(Math.random() * 255)})`;
      card.style.backgroundColor = randomColor;

      // 랜덤한 위치로 약간 이동 (불안정한 UI 표현)
      const randomX = Math.floor(Math.random() * 10) - 5;
      const randomY = Math.floor(Math.random() * 10) - 5;
      card.style.transform = `translate(${randomX}px, ${randomY}px)`;
    });
  });

  // goodUX 효과
  const goodFeatureCards = document.querySelectorAll(".good-feature-card");
  goodFeatureCards.forEach((card) => {
    card.addEventListener("mouseenter", () => {
      card.style.boxShadow = "0 10px 20px rgba(34, 209, 253, 0.2)";
    });

    card.addEventListener("mouseleave", () => {
      card.style.boxShadow = "none";
    });
  });

  // goodUX 폼 인터랙션
  const goodFormInputs = document.querySelectorAll(
    ".good-form-group input, .good-form-group textarea"
  );
  goodFormInputs.forEach((input) => {
    input.addEventListener("focus", () => {
      input.style.borderColor = "#22d1fd";
      input.parentElement.querySelector("label").style.color = "#22d1fd";
    });

    input.addEventListener("blur", () => {
      input.style.borderColor = "rgba(255, 255, 255, 0.1)";
      input.parentElement.querySelector("label").style.color = "#a0a0a0";
    });
  });
});

// UX OVER 변경 인터렉션
const sections = document.querySelectorAll(".ux-mask-section");

sections.forEach((section) => {
  const mask = section.querySelector(".mask-layer");

  //  초기 상태: 마스크 안 보이게 설정
  mask.style.maskImage = `radial-gradient(circle 0px at -9999px -9999px, transparent 0%, black 100%)`;
  mask.style.webkitMaskImage = `radial-gradient(circle 0px at -9999px -9999px, transparent 0%, black 100%)`;

  section.addEventListener("mousemove", (e) => {
    const x = e.offsetX;
    const y = e.offsetY;
    const radius = 150;
    const maskStyle = `radial-gradient(circle ${radius}px at ${x}px ${y}px, transparent 0%, transparent 20%,transparent 80%, black 100%)`;
    mask.style.maskImage = maskStyle;
    mask.style.webkitMaskImage = maskStyle;
  });

  section.addEventListener("mouseleave", () => {
    //  다시 완전히 사라지게 (원 위치를 화면 밖으로 던지기)
    const maskStyle = `radial-gradient(circle 0px at -9999px -9999px, transparent 0%, black 100%)`;
    mask.style.maskImage = maskStyle;
    mask.style.webkitMaskImage = maskStyle;
  });
});

// 마우스 over 영상 재생 발생
document.addEventListener("DOMContentLoaded", () => {
  const hero = document.querySelector(".hero");
  const video = document.querySelector(".hero-video");

  // 반복 재생 제거
  video.loop = false;

  hero.addEventListener("mouseenter", () => {
    video.currentTime = 0;
    video.play();
  });

  hero.addEventListener("mouseleave", () => {
    video.pause();
    video.currentTime = 0;
  });
});

document.addEventListener("DOMContentLoaded", () => {
  gsap.registerPlugin(ScrollTrigger);

  gsap.fromTo(
    ".website-intro",
    { y: 80, opacity: 0 },
    {
      y: 0,
      opacity: 1,
      duration: 1.5,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".website-intro",
        start: "top 80%",
        toggleActions: "play none none none",
      },
    }
  );
});

//컨설팅 폼
const consulting = document.querySelector(".consulting-form");

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        consulting.classList.add("revealed");
      }
    });
  },
  { threshold: 0.3 }
);

revealObserver.observe(consulting);
