import tikshuv from "assets/images/tikshuv.png";
import hever from "assets/images/hever.png";
import unit from "assets/images/unit.png";
import AmosRolider from "assets/images/AmosRolider.png";
import calendarWeek1 from "assets/images/calendarWeek1.png";
import calendarWeek2 from "assets/images/calendarWeek2.png";
import ICalendarWeek from "models/ICalendarWeek";

export const EVENTS_CALENDAR_DATA: ICalendarWeek[] = [
  {
    weekBeginningDate: new Date("Wed Feb 10 2021 08:30:00 GMT+0200 (שעון ישראל (חורף))"),
    weekCalendarImage: calendarWeek1,
    weekDaysCalendar: [
      {
        dayIndex: 9,
        dayDate: "18.02",
        dayDescription: "יום חמישי",
        events: [
          {
            eventName: "'חוסן כלכלי בתקופת הקורונה'",
            eventSubDescription: "הרצאה על התנהלות כלכלית נכונה בזמן הקורונה למשרתי הקבע המובהקים",
            eventTime: "10:00 - 11:00",
            imageSrc: hever,
            eventLink: "https://zoom.us/j/92623774916",
            longDescription: `הרצאה על התנהלות כלכלית נכונה בזמן הקורונה למשרתי הקבע המובהקים.
                מיד בתום ההרצאה ניתן יהיה להישאר לפגישות אישיות- מותנה בהרשמה מראש
                `,
          },
          {
            eventName: "פגישות אישיות",
            eventSubDescription: "",
            eventTime: "11:00 - 14:00",
            imageSrc: hever,
            eventLink: "",
          },
        ],
      },
      {
        dayIndex: 8,
        dayDate: "17.02",
        dayDescription: "יום רביעי",
        events: [
          {
            eventName: "'הרצאת 'זמן פיננסים",
            eventTime: "09:00 - 10:15",
            imageSrc: hever,
            eventLink: "https://zoom.us/j/98101647463",
            longDescription: "מה זה פיננסים? מושגים חשובים שהרבה משרתים לא מכירים. לאוכלוסייה שלקראת פרישה אבל לא רק",
          },
          {
            eventName: "'הרצאה על 'עולם הביטוחים",
            eventTime: "10:30 - 11:30",
            imageSrc: hever,
            eventLink: "https://zoom.us/j/94044677658",
            longDescription: `חוק גורן, מה המשמעות של כל אחד מהביטוחים? מה זה תאונות אישיות?
                ההרצאה תועבר על ידי שלמה גרומן, ראש היחידה לביטוחים בחבר
                `,
          },
          {
            eventName: "הרצאה של פרופ' עמוס רולידר",
            eventSubDescription: 'פתיחה של הקשר"ר',
            eventTime: "19:45 - 21:00",
            imageSrc: AmosRolider,
            eventLink: "https://zoom.us/j/91942416063",
            longDescription:
              `עמוס הינו פרופסור לחינוך. 
              פעילותו מתמקדת בהנחיית המבוגרים המשמעותיים בחיי הילדים
               ובמתן כלים אפקטיביים להתמודדות עם קשיים בחיי המשפחה`,
          },
        ],
      },
      {
        dayIndex: 7,
        dayDate: "16.02",
        dayDescription: "יום שלישי",
        events: [
          {
            eventName: "הרצאה על תלוש השכר",
            eventTime: "09:30 - 11:00",
            imageSrc: unit,
            eventLink: "https://zoom.us/j/95578738416",
            longDescription:
              "הרצאה על מרכיבי השכר, ניכויים, תשלומים שוטפים ועוד. ההרצאה תועבר על ידי הילה בן שושן- נציגת מופת",
          },
          {
            eventName: "הרצאה על זכויות משרתי הקבע",
            eventTime: "11:15 - 12:00",
            imageSrc: unit,
            eventLink: "https://zoom.us/j/94145344440",
            longDescription: `דיור, הלנות, הלוואות, נופשים, שכר דירה, הובלות וכל מה שמשרתי הקבע חייבים לדעת! 
            ההרצאה תועבר על ידי רס"ן מאיה יזרעאלי, רמ"ד חובה וקבע במופת`,
          },
        ],
      },
      {
        dayIndex: 6,
        dayDate: "15.02",
        dayDescription: "יום שני",
        events: [
          {
            eventName: 'פתיחה - רח"ט ההגנה',
            eventTime: "08:45 - 09:00",
            imageSrc: tikshuv,
            eventLink: "https://zoom.us/j/91484048285",
          },
          {
            eventName: "'הרצאת 'עולם חבר",
            eventTime: "9:00 - 10:00",
            imageSrc: hever,
            eventLink: "https://zoom.us/j/91484048285",
            longDescription: `הרצאה אודות ערוצי הסיוע, הטבות שלא הכרתם, סדנאות, התנהלות כלכלית, תווים וערוצי סיוע נוספים הקיימים מטעם 'חבר'. ההרצאה תועבר על ידי סמנכ"לית השירות`,
          },
        ],
      },
      {
        dayIndex: 5,
        dayDate: "14.02",
        dayDescription: "יום ראשון",
        events: [
          {
            eventName: "כנס כניסה לקבע",
            eventTime: "10:00 - 11:00",
            imageSrc: unit,
            eventLink: "https://zoom.us/j/92751016224",
            longDescription:
              `כנס למשרתים אשר נכנסו לקבע. 
              בשנה האחרונה לא התקיים לאור הקורונה.
               נותן למשרת את כל המידע הרלוונטי בנושאים הבאים: ביטוחים, כרטיסי 'חבר' ועוד.
               הכנס יועבר על ידי נציג מופת`,
          },
          {
            eventName: "'חסכון זה בטחון'",
            eventSubDescription: "הרצאה על התנהלות כלכלית נכונה בזמן הקורונה למשרתי הקבע הראשוניים",
            eventTime: "13:15 - 14:15",
            imageSrc: hever,
            eventLink: "https://zoom.us/j/94238646658",
            longDescription:
              `הרצאה על התנהלות כלכלית נכונה בזמן הקורונה למשרתי הקבע הראשוניים. 
              'ההרצאות יועברו על ידי מנהלי חסכון מטעם החברות 'אלטשולר שחם' ו'פסגות`,
          },
        ],
      },
    ],
  },
  {
    weekBeginningDate: new Date("Thu Feb 18 2021 14:00:00 GMT+0200 (שעון ישראל (חורף))"),
    weekCalendarImage: calendarWeek2,
    weekDaysCalendar: [
      {
        dayIndex: 4,
        dayDate: "25.02",
        dayDescription: "יום חמישי",
        events: [
          {
            eventName: "הרצאה על תלוש השכר",
            eventTime: "08:30 - 10:00",
            imageSrc: unit,
            eventLink: "https://zoom.us/j/99434763827",
            longDescription:
              "הרצאה על מרכיבי השכר, ניכויים, תשלומים שוטפים ועוד. ההרצאה תועבר על ידי הילה בן שושן- נציגת מופת",
          },
          {
            eventName: "'חוסן כלכלי בתקופת הקורונה'",
            eventSubDescription: "הרצאה על התנהלות כלכלית נכונה בזמן הקורונה למשרתי הקבע המובהקים",
            eventTime: "10:00 - 11:00",
            imageSrc: hever,
            eventLink: "https://zoom.us/j/99710593134",
            longDescription: `הרצאה על התנהלות כלכלית נכונה בזמן הקורונה למשרתי הקבע המובהקים.
                מיד בתום ההרצאה ניתן יהיה להישאר לפגישות אישיות- מותנה בהרשמה מראש
                `,
          },
          {
            eventName: "פגישות אישיות",
            eventSubDescription: "",
            eventTime: "11:00 - 14:00",
            imageSrc: hever,
            eventLink: "",
          },
        ],
      },
      {
        dayIndex: 3,
        dayDate: "24.02",
        dayDescription: "יום רביעי",
        events: [
          {
            eventName: "'הרצאת 'זמן פיננסים",
            eventTime: "09:00 - 10:15",
            imageSrc: hever,
            eventLink: "https://zoom.us/j/99702896407",
            longDescription: "מה זה פיננסים? מושגים חשובים שהרבה משרתים לא מכירים. לאוכלוסייה שלקראת פרישה אבל לא רק",
          },
          {
            eventName: "'הרצאה על 'עולם הביטוחים",
            eventTime: "10:30 - 11:30",
            imageSrc: hever,
            eventLink: "https://zoom.us/j/98838610782",
            longDescription: `חוק גורן, מה המשמעות של כל אחד מהביטוחים? מה זה תאונות אישיות?
                ההרצאה תועבר על ידי שלמה גרומן, ראש היחידה לביטוחים בחבר
                `,
          },
        ],
      },
      {
        dayIndex: 2,
        dayDate: "23.02",
        dayDescription: "יום שלישי",
        events: [
          {
            eventName: "הרצאה על זכויות משרתי הקבע",
            eventTime: "20:00 - 21:00",
            imageSrc: unit,
            eventLink: "https://zoom.us/j/92244369673",
            longDescription: `דיור, הלנות, הלוואות, נופשים, שכר דירה, הובלות וכל מה שמשרתי הקבע חייבים לדעת! 
            ההרצאה תועבר על ידי רס"ן מאיה יזרעאלי, רמ"ד חובה וקבע במופת`,
          },
        ],
      },
      {
        dayIndex: 1,
        dayDate: "22.02",
        dayDescription: "יום שני",
        events: [
          {
            eventName: "'הרצאת 'עולם חבר",
            eventTime: "9:00 - 10:00",
            imageSrc: hever,
            eventLink: "https://zoom.us/j/97660766734",
            longDescription: `הרצאה אודות ערוצי הסיוע, הטבות שלא הכרתם, סדנאות, התנהלות כלכלית, תווים וערוצי סיוע נוספים הקיימים מטעם 'חבר'. ההרצאה תועבר על ידי סמנכ"לית השירות`,
          },
          {
            eventName: 'פתיחה - מפקד לוט"ם',
            eventTime: "12:00 - 12:30",
            imageSrc: hever,
            eventLink: "https://zoom.us/j/97660766734",
          },
        ],
      },
      {
        dayIndex: 0,
        dayDate: "21.02",
        dayDescription: "יום ראשון",
        events: [
          {
            eventName: "כנס כניסה לקבע",
            eventTime: "10:00 - 11:00",
            imageSrc: unit,
            eventLink: "https://zoom.us/j/98359639004",
            longDescription:
            `כנס למשרתים אשר נכנסו לקבע. 
            בשנה האחרונה לא התקיים לאור הקורונה.
             נותן למשרת את כל המידע הרלוונטי בנושאים הבאים: ביטוחים, כרטיסי 'חבר' ועוד.
             הכנס יועבר על ידי נציג מופת`,
           },
          {
            eventName: "'חסכון זה בטחון'",
            eventSubDescription: "הרצאה על התנהלות כלכלית נכונה בזמן הקורונה למשרתי הקבע הראשוניים",
            eventTime: "13:15 - 14:15",
            imageSrc: hever,
            eventLink: "https://zoom.us/j/97975688046",
            longDescription:
              `הרצאה על התנהלות כלכלית נכונה בזמן הקורונה למשרתי הקבע הראשוניים. 
              'ההרצאות יועברו על ידי מנהלי חסכון מטעם החברות 'אלטשולר שחם' ו'פסגות`,
          },
        ],
      },
    ],
  },
];
