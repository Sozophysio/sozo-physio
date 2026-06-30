import img1 from "../assets/clinical_pilates_1.webp";
import img2 from "../assets/clinical_pilates_2.webp";
import img3 from "../assets/exercise_rehab_1.webp";
import img4 from "../assets/exercise_rehab_2.webp";
import img5 from "../assets/dry_needle_1.webp";
import img6 from "../assets/dry_needle_2.webp";
import img7 from "../assets/cupping_1.webp";
import img8 from "../assets/cupping_2.webp";
import img9 from "../assets/medicare_1.webp";
import img10 from "../assets/medicare_2.webp";
import img11 from "../assets/work&TAC_1.webp";
import img12 from "../assets/work&TAC_2.webp";
import img13 from "../assets/post&pre_1.webp";
import img14 from "../assets/post&pre_2.webp";
import img15 from "../assets/sports_injury_2.webp";
import img16 from "../assets/sports_injury_1_up.jpg";

const servicesData = {
  "clinical-pilates": {
    title: "Clinical Pilates",
    image1: img1,
    image2: img2,
    subtitle: "Move Better. Build Strength. Improve Control.",
    description:
      "Physiotherapist-guided Pilates designed to improve strength, posture, flexibility, and long-term movement quality.",
    about: `Clinical Pilates is a physiotherapist-guided exercise program designed to improve core strength, posture, flexibility, balance, and body control.

Unlike general Pilates classes, each session is tailored to your injury, movement patterns, and physical condition.

Our physiotherapists assess your movement and create a safe, progressive program to improve strength and functional movement.`,

    helpsWith: [
      "Chronic lower back and neck pain",
      "Poor posture",
      "Core weakness",
      "Pregnancy-related pain",
      "Post-surgical rehabilitation",
      "Sports injury prevention",
      "Balance & stability issues",
    ],
  },

  "exercise-rehab": {
    title: "Exercise Rehabilitation",
    image1: img3,
    image2: img4,
    subtitle: "Restore Strength. Improve Movement.",
    description:
      "Structured rehabilitation programs designed to restore strength, mobility, and function after injury or surgery.",

    about: `Exercise rehabilitation is a structured recovery program designed to restore strength, mobility, endurance, and function.

Programs are tailored for sports injuries, workplace injuries, chronic pain, and post-operative recovery.

We focus on gradual progression to safely return you to work, sport, and daily activities.`,

    helpsWith: [
      "Sports injuries",
      "Workplace injuries",
      "Chronic pain",
      "Joint & muscle weakness",
      "Post-operative recovery",
      "Reduced mobility & balance",
    ],
  },

  "dry-needling": {
    title: "Dry Needling",
    image1: img5,
    image2: img6,
    subtitle: "Relieve Pain. Restore Movement.",
    description:
      "A targeted treatment technique designed to reduce muscle tension, improve movement, and relieve pain effectively.",

    about: `Dry needling is an effective treatment technique used to reduce muscular tension, improve movement, and relieve pain.

Thin sterile needles are inserted into tight muscles or trigger points to release tension, improve circulation, and promote recovery.

This treatment helps restore normal muscle function and supports faster healing for a wide range of conditions.`,

    helpsWith: [
      "Muscle tightness",
      "Poor blood circulation",
      "Pain and stiffness",
      "Muscle activation issues",
      "Neck and back pain",
      "Sports injuries",
      "Headaches",
      "Chronic pain conditions",
    ],
  },

  "cupping-therapy": {
    title: "Cupping Therapy",
    image1: img7,
    image2: img8,
    subtitle: "Improve Circulation. Reduce Tension.",
    description:
      "A soft tissue therapy that uses suction to improve blood flow, reduce muscle tension, and support natural healing.",

    about: `Cupping therapy is a soft tissue treatment that uses suction cups to improve blood flow, reduce muscle tension, and promote healing.

It is commonly used alongside physiotherapy treatments to enhance recovery and relieve discomfort.

Cupping helps improve circulation, relax muscles, and support overall recovery from injuries and physical strain.`,

    helpsWith: [
      "Muscle relaxation",
      "Reduced stiffness",
      "Improved circulation",
      "Pain relief",
      "Faster recovery after exercise",
      "Sports injuries",
      "Back and neck pain",
      "Muscle tightness",
    ],
  },

  "medicare-care": {
    title: "Medicare Care Plan",
    image1: img9,
    image2: img10,
    subtitle: "Support for Long-Term Health Conditions",
    description:
      "Physiotherapy services under Medicare Care Plans to help manage chronic conditions and improve long-term health outcomes.",

    about: `We provide physiotherapy services under Medicare Care Plans, also known as Chronic Disease Management (CDM) plans, for eligible patients with chronic or long-term health conditions.

A Medicare Care Plan is arranged by your GP and allows access to subsidised allied health services, including physiotherapy, to support ongoing care.

Our physiotherapists work closely with your GP and other healthcare professionals to provide coordinated treatment focused on improving mobility, reducing pain, and enhancing overall function.`,

    helpsWith: [
      "Chronic back and neck pain",
      "Arthritis and joint pain",
      "Diabetes-related mobility issues",
      "Neurological conditions",
      "Osteoporosis",
      "Balance and falls risk",
      "Chronic musculoskeletal conditions",
      "Post-surgical rehabilitation",
      "Reduced mobility and strength",
    ],

    // 👇 optional extra (you can use later if needed)
    treatments: [
      "Pain management strategies",
      "Exercise rehabilitation",
      "Strength and mobility programs",
      "Balance and falls prevention",
      "Postural correction",
      "Education and self-management",
    ],
  },

  "work-rehab": {
    title: "WorkCover & TAC Rehabilitation",
    image1: img11,
    image2: img12,
    subtitle: "Recover Safely. Return with Confidence.",
    description:
      "Physiotherapy support for workplace and motor vehicle injuries to help you recover and return to normal activities safely.",

    about: `We provide physiotherapy management for patients recovering from workplace injuries and motor vehicle accidents under WorkCover and TAC claims.

Our goal is to support safe recovery through structured rehabilitation and help you return to work and daily activities as efficiently as possible.

We work closely with GPs, specialists, and employers to ensure coordinated care throughout your recovery journey.`,

    helpsWith: [
      "Injury assessment and treatment",
      "Pain management",
      "Functional rehabilitation",
      "Return-to-work planning",
      "Strength and conditioning",
      "Coordination with healthcare providers",
    ],
  },

  "pre-post-surgery": {
    title: "Pre & Post Surgery Rehabilitation",
    image1: img13,
    image2: img14,
    subtitle: "Recover Stronger. Move with Confidence.",
    description:
      "Rehabilitation programs designed to prepare your body for surgery and support a safe, effective recovery afterward.",

    about: `Rehabilitation before and after surgery plays an important role in improving recovery outcomes and restoring function.

Pre-surgery rehabilitation helps prepare your body by improving strength, mobility, and overall fitness before your procedure.

Post-surgery rehabilitation is carefully guided to support recovery, reduce pain, restore movement, and rebuild strength so you can return to normal activities safely.`,

    helpsWith: [
      "Knee replacement",
      "Hip replacement",
      "ACL reconstruction",
      "Rotator cuff repair",
      "Spinal surgery",
      "Fracture management",
    ],
  },

  "sports-physio": {
    title: "Sports Physiotherapy",
    image1: img15,
    image2: img16,
    subtitle: "Recover Faster. Perform Better.",
    description:
      "Specialised physiotherapy for sports injuries, performance improvement, and injury prevention.",

    about: `Sports physiotherapy focuses on the prevention, treatment, and rehabilitation of sporting injuries.

We work with athletes and active individuals to manage injuries, improve performance, and reduce the risk of future problems.

Whether you are a professional athlete or a recreational participant, our treatments are tailored to help you recover and perform at your best.`,

    helpsWith: [
      "Acute sports injuries",
      "Muscle strains and ligament sprains",
      "Running injuries",
      "Tendon pain",
      "Strength and conditioning",
      "Injury prevention programs",
      "Return-to-sport rehabilitation",
    ],
  },
};

export default servicesData;
