// Basic English-learning content for Odia-speaking learners.
// Each word/phrase carries its Odia meaning and an Odia-script phonetic
// guide (how the English sounds, written in Odia script) so a learner who
// reads Odia can sound the English out even without hearing it spoken.

export type LessonItem = {
  id: string;
  en: string;
  odiaMeaning: string;
  odiaPhonetic: string;
};

export type LessonCategory = {
  id: string;
  title: string;
  odiaTitle: string;
  level: "basic" | "advanced";
  items: LessonItem[];
};

function cat(
  id: string,
  title: string,
  odiaTitle: string,
  rows: [string, string, string][],
  level: "basic" | "advanced" = "basic",
): LessonCategory {
  return {
    id,
    title,
    odiaTitle,
    level,
    items: rows.map(([en, odiaMeaning, odiaPhonetic], i) => ({
      id: `${id}-${i}`,
      en,
      odiaMeaning,
      odiaPhonetic,
    })),
  };
}

export const LESSON_CATEGORIES: LessonCategory[] = [
  cat("alphabet", "Alphabet", "ବର୍ଣ୍ଣମାଳା", [
    ["A", "ଏ", "ଏ"], ["B", "ବି", "ବି"], ["C", "ସି", "ସି"], ["D", "ଡି", "ଡି"],
    ["E", "ଇ", "ଇ"], ["F", "ଏଫ୍", "ଏଫ୍"], ["G", "ଜି", "ଜି"], ["H", "ଏଚ୍", "ଏଚ୍"],
    ["I", "ଆଇ", "ଆଇ"], ["J", "ଜେ", "ଜେ"], ["K", "କେ", "କେ"], ["L", "ଏଲ୍", "ଏଲ୍"],
    ["M", "ଏମ୍", "ଏମ୍"], ["N", "ଏନ୍", "ଏନ୍"], ["O", "ଓ", "ଓ"], ["P", "ପି", "ପି"],
    ["Q", "କ୍ୟୁ", "କ୍ୟୁ"], ["R", "ଆର୍", "ଆର୍"], ["S", "ଏସ୍", "ଏସ୍"], ["T", "ଟି", "ଟି"],
    ["U", "ୟୁ", "ୟୁ"], ["V", "ଭି", "ଭି"], ["W", "ଡବଲ୍‌ୟୁ", "ଡବଲ୍‌ୟୁ"], ["X", "ଏକ୍ସ", "ଏକ୍ସ"],
    ["Y", "ୱାଇ", "ୱାଇ"], ["Z", "ଜେଡ୍", "ଜେଡ୍"],
  ]),
  cat("numbers", "Numbers", "ସଂଖ୍ୟା", [
    ["One", "ଏକ", "ୱାନ୍"], ["Two", "ଦୁଇ", "ଟୁ"], ["Three", "ତିନି", "ଥ୍ରି"],
    ["Four", "ଚାରି", "ଫୋର୍"], ["Five", "ପାଞ୍ଚ", "ଫାଇଭ୍"], ["Six", "ଛଅ", "ସିକ୍ସ"],
    ["Seven", "ସାତ", "ସେଭେନ୍"], ["Eight", "ଆଠ", "ଏଟ୍"], ["Nine", "ନଅ", "ନାଇନ୍"],
    ["Ten", "ଦଶ", "ଟେନ୍"], ["Eleven", "ଏଗାର", "ଇଲେଭେନ୍"], ["Twelve", "ବାର", "ଟ୍ୱେଲଭ୍"],
    ["Thirteen", "ତେର", "ଥାର୍‌ଟିନ୍"], ["Fourteen", "ଚଉଦ", "ଫୋର୍‌ଟିନ୍"], ["Fifteen", "ପନ୍ଦର", "ଫିଫ୍‌ଟିନ୍"],
    ["Sixteen", "ଷୋହଳ", "ସିକ୍ସ‌ଟିନ୍"], ["Seventeen", "ସତର", "ସେଭେନ‌ଟିନ୍"], ["Eighteen", "ଅଠର", "ଏଟିନ୍"],
    ["Nineteen", "ଊଣେଇଶ", "ନାଇଣ୍‌ଟିନ୍"], ["Twenty", "କୋଡ଼ିଏ", "ଟ୍ୱେଣ୍ଟି"],
  ]),
  cat("greetings", "Greetings & Phrases", "ଅଭିବାଦନ ଓ ବାକ୍ୟାଂଶ", [
    ["Hello", "ନମସ୍କାର", "ହେଲୋ"],
    ["Good morning", "ସୁପ୍ରଭାତ", "ଗୁଡ୍ ମର୍ନିଙ୍ଗ"],
    ["Good night", "ଶୁଭରାତ୍ରି", "ଗୁଡ୍ ନାଇଟ୍"],
    ["How are you?", "ଆପଣ କେମିତି ଅଛନ୍ତି?", "ହାଉ ଆର୍ ୟୁ"],
    ["I am fine", "ମୁଁ ଭଲ ଅଛି", "ଆଇ ଆମ୍ ଫାଇନ୍"],
    ["Thank you", "ଧନ୍ୟବାଦ", "ଥାଙ୍କ ୟୁ"],
    ["Please", "ଦୟାକରି", "ପ୍ଲିଜ୍"],
    ["Sorry", "କ୍ଷମା କରନ୍ତୁ", "ସରି"],
    ["Yes", "ହଁ", "ୟେସ୍"],
    ["No", "ନା", "ନୋ"],
    ["What is your name?", "ଆପଣଙ୍କ ନାମ କଣ?", "ୱଟ୍ ଇଜ୍ ୟୁଅର୍ ନେମ୍"],
    ["My name is...", "ମୋ ନାମ...", "ମାଇ ନେମ୍ ଇଜ୍"],
    ["Where are you from?", "ଆପଣ କେଉଁଠାରୁ ଆସିଛନ୍ତି?", "ୱେୟାର ଆର୍ ୟୁ ଫ୍ରମ୍"],
    ["Nice to meet you", "ଆପଣଙ୍କୁ ଭେଟି ଖୁସି ଲାଗିଲା", "ନାଇସ୍ ଟୁ ମିଟ୍ ୟୁ"],
    ["Goodbye", "ବିଦାୟ", "ଗୁଡ୍‌ବାଏ"],
  ]),
  cat("days", "Days of the Week", "ସପ୍ତାହର ଦିନ", [
    ["Monday", "ସୋମବାର", "ମଣ୍ଡେ"], ["Tuesday", "ମଙ୍ଗଳବାର", "ଟ୍ୟୁଜ୍‌ଡେ"],
    ["Wednesday", "ବୁଧବାର", "ୱେନ୍ସ‌ଡେ"], ["Thursday", "ଗୁରୁବାର", "ଥର୍ସ‌ଡେ"],
    ["Friday", "ଶୁକ୍ରବାର", "ଫ୍ରାଇ‌ଡେ"], ["Saturday", "ଶନିବାର", "ସାଟର୍‌ଡେ"],
    ["Sunday", "ରବିବାର", "ସନ୍‌ଡେ"],
  ]),
  cat("colors", "Colors", "ରଙ୍ଗ", [
    ["Red", "ଲାଲ", "ରେଡ୍"], ["Blue", "ନୀଳ", "ବ୍ଲୁ"], ["Green", "ସବୁଜ", "ଗ୍ରିନ୍"],
    ["Yellow", "ହଳଦିଆ", "ୟେଲୋ"], ["Black", "କଳା", "ବ୍ଲାକ୍"], ["White", "ଧଳା", "ୱାଇଟ୍"],
    ["Orange", "କମଳା", "ଅରେଞ୍ଜ୍"], ["Pink", "ଗୋଲାପି", "ପିଙ୍କ୍"],
    ["Purple", "ବାଇଗଣି", "ପର୍ପଲ୍"], ["Brown", "ବାଦାମୀ", "ବ୍ରାଉନ୍"],
  ]),
  cat("family", "Family", "ପରିବାର", [
    ["Mother", "ମା", "ମଦର୍"], ["Father", "ବାପା", "ଫାଦର୍"], ["Brother", "ଭାଇ", "ବ୍ରଦର୍"],
    ["Sister", "ଭଉଣୀ", "ସିଷ୍ଟର୍"], ["Son", "ପୁଅ", "ସନ୍"], ["Daughter", "ଝିଅ", "ଡଟର୍"],
    ["Grandfather", "ଜେଜେବାପା", "ଗ୍ରାଣ୍ଡଫାଦର୍"], ["Grandmother", "ଜେଜେମା", "ଗ୍ରାଣ୍ଡମଦର୍"],
    ["Friend", "ବନ୍ଧୁ", "ଫ୍ରେଣ୍ଡ୍"], ["Husband", "ସ୍ୱାମୀ", "ହଜବାଣ୍ଡ"], ["Wife", "ସ୍ତ୍ରୀ", "ୱାଇଫ୍"],
  ]),
  cat("food", "Food & Drink", "ଖାଦ୍ୟ ଓ ପାନୀୟ", [
    ["Water", "ପାଣି", "ୱାଟର୍"], ["Rice", "ଭାତ", "ରାଇସ୍"], ["Milk", "ଦୁଧ", "ମିଲ୍କ୍"],
    ["Bread", "ପାଉଁରୁଟି", "ବ୍ରେଡ୍"], ["Egg", "ଅଣ୍ଡା", "ଏଗ୍"], ["Fish", "ମାଛ", "ଫିସ୍"],
    ["Vegetable", "ପନିପରିବା", "ଭେଜିଟେବଲ୍"], ["Fruit", "ଫଳ", "ଫ୍ରୁଟ୍"], ["Tea", "ଚା", "ଟି"],
    ["Sugar", "ଚିନି", "ସୁଗାର୍"], ["Salt", "ଲୁଣ", "ସଲ୍ଟ୍"],
  ]),
  cat("body", "Body Parts", "ଶରୀରର ଅଙ୍ଗ", [
    ["Head", "ମୁଣ୍ଡ", "ହେଡ୍"], ["Eye", "ଆଖି", "ଆଇ"], ["Nose", "ନାକ", "ନୋଜ୍"],
    ["Ear", "କାନ", "ଇଅର୍"], ["Mouth", "ମୁହଁ", "ମାଉଥ୍"], ["Hand", "ହାତ", "ହ୍ୟାଣ୍ଡ"],
    ["Leg", "ଗୋଡ଼", "ଲେଗ୍"], ["Stomach", "ପେଟ", "ଷ୍ଟମାକ୍"],
  ]),

  // ---------- Advanced ----------
  cat("verbs", "Common Verbs", "ସାଧାରଣ କ୍ରିୟା ଶବ୍ଦ", [
    ["Check", "ଯାଞ୍ଚ କରିବା", "ଚେକ୍"], ["Repair", "ମରାମତି କରିବା", "ରିପେୟାର୍"], ["Install", "ଲଗାଇବା", "ଇନଷ୍ଟଲ୍"],
    ["Measure", "ମାପିବା", "ମେଜର୍"], ["Connect", "ସଂଯୋଗ କରିବା", "କନେକ୍ଟ୍"], ["Test", "ପରୀକ୍ଷା କରିବା", "ଟେଷ୍ଟ୍"],
    ["Explain", "ବୁଝାଇବା", "ଏକ୍ସପ୍ଲେନ୍"], ["Deliver", "ପହଞ୍ଚାଇବା", "ଡେଲିଭର୍"],
    ["Agree", "ରାଜି ହେବା", "ଆଗ୍ରୀ"], ["Complain", "ଅଭିଯୋଗ କରିବା", "କମ୍ପ୍ଲେନ୍"],
  ], "advanced"),
  cat("feelings", "Feelings & Qualities", "ଅନୁଭବ ଓ ଗୁଣ", [
    ["Careful", "ସାବଧାନ", "କେୟାରଫୁଲ୍"], ["Dangerous", "ବିପଦଜନକ", "ଡେଞ୍ଜରସ୍"], ["Urgent", "ଜରୁରୀ", "ଅର୍ଜେଣ୍ଟ୍"],
    ["Comfortable", "ଆରାମଦାୟକ", "କମ୍ଫର୍ଟେବଲ୍"], ["Confident", "ଆତ୍ମବିଶ୍ୱାସୀ", "କନଫିଡେଣ୍ଟ୍"], ["Difficult", "କଷ୍ଟକର", "ଡିଫିକଲ୍ଟ୍"],
    ["Convenient", "ସୁବିଧାଜନକ", "କନଭିନିଏଣ୍ଟ୍"], ["Reliable", "ଭରସାଯୋଗ୍ୟ", "ରିଲାଏବଲ୍"],
    ["Satisfied", "ସନ୍ତୁଷ୍ଟ", "ସାଟିସ୍ଫାଏଡ୍"], ["Disappointed", "ନିରାଶ", "ଡିସାପଏଣ୍ଟେଡ୍"],
  ], "advanced"),
  cat("time", "Time & Sequence Words", "ସମୟ ଓ କ୍ରମ ଶବ୍ଦ", [
    ["Nowadays", "ବର୍ତ୍ତମାନ ସମୟରେ", "ନାଉଆଡେଜ୍"], ["Immediately", "ତୁରନ୍ତ", "ଇମିଡିଏଟ୍‌ଲି"], ["Eventually", "ଶେଷରେ", "ଏଭେଞ୍ଚୁଆଲି"],
    ["Meanwhile", "ଏହି ମଧ୍ୟରେ", "ମିନ୍‌ୱାଇଲ୍"], ["Previously", "ପୂର୍ବରୁ", "ପ୍ରିଭିଅସ୍‌ଲି"], ["Afterwards", "ପରେ", "ଆଫ୍ଟରୱାର୍ଡସ୍"],
    ["Recently", "ସାମ୍ପ୍ରତିକ କାଳରେ", "ରିସେଣ୍ଟ୍‌ଲି"], ["Shortly", "ଶୀଘ୍ର", "ସର୍ଟ୍‌ଲି"],
    ["Frequently", "ବାରମ୍ବାର", "ଫ୍ରିକ୍ୱେଣ୍ଟ୍‌ଲି"], ["Occasionally", "ବେଳେବେଳେ", "ଅକେଜନାଲି"],
  ], "advanced"),
  cat("connectors", "Useful Connectors", "ସଂଯୋଜକ ଶବ୍ଦ", [
    ["However", "ତଥାପି", "ହାଉଏଭର୍"], ["Therefore", "ତେଣୁ", "ଦେରଫୋର୍"], ["Although", "ଯଦିଓ", "ଅଲଥୋ"],
    ["Because", "କାରଣ", "ବିକଜ୍"], ["In addition", "ଏଥିସହିତ", "ଇନ୍ ଆଡିସନ୍"], ["For example", "ଉଦାହରଣ ସ୍ୱରୂପ", "ଫର୍ ଏକ୍ଜାମ୍ପଲ୍"],
    ["As a result", "ଫଳସ୍ୱରୂପ", "ଆଜ୍ ଏ ରିଜଲ୍ଟ"], ["On the other hand", "ଅନ୍ୟପକ୍ଷରେ", "ଅନ୍ ଦି ଅଦର୍ ହ୍ୟାଣ୍ଡ"],
    ["Actually", "ପ୍ରକୃତରେ", "ଆକ୍ଚୁଆଲି"], ["Basically", "ମୌଳିକ ଭାବରେ", "ବେସିକାଲି"],
  ], "advanced"),
  cat("business", "Work & Business Terms", "କାର୍ଯ୍ୟ ଓ ବ୍ୟବସାୟ ଶବ୍ଦ", [
    ["Experience", "ଅଭିଜ୍ଞତା", "ଏକ୍ସପେରିଏନ୍ସ"], ["Responsibility", "ଦାୟିତ୍ୱ", "ରେସ୍ପନ୍ସିବିଲିଟି"], ["Deadline", "ସମୟସୀମା", "ଡେଡଲାଇନ୍"],
    ["Appointment", "ସାକ୍ଷାତ ସମୟ", "ଆପଏଣ୍ଟମେଣ୍ଟ"], ["Contract", "ଚୁକ୍ତିନାମା", "କଣ୍ଟ୍ରାକ୍ଟ"], ["Invoice", "ବିଲ୍", "ଇନଭଏସ୍"],
    ["Warranty", "ଗ୍ୟାରେଣ୍ଟି", "ୱାରେଣ୍ଟି"], ["Maintenance", "ରକ୍ଷଣାବେକ୍ଷଣ", "ମେଣ୍ଟେନାନ୍ସ"],
    ["Inspection", "ନିରୀକ୍ଷଣ", "ଇନ୍‌ସ୍ପେକ୍ସନ୍"], ["Certificate", "ପ୍ରମାଣପତ୍ର", "ସର୍ଟିଫିକେଟ୍"],
  ], "advanced"),

  // ---------- More everyday vocabulary ----------
  cat("vegetables", "Vegetables", "ପନିପରିବା", [
    ["Potato", "ଆଳୁ", "ପୋଟାଟୋ"], ["Onion", "ପିଆଜ", "ଅନିଅନ୍"], ["Tomato", "ଟମାଟୋ", "ଟମାଟୋ"],
    ["Brinjal", "ବାଇଗଣ", "ବ୍ରିଞ୍ଜଲ୍"], ["Cabbage", "ବନ୍ଦାକୋବି", "କ୍ୟାବେଜ୍"], ["Cauliflower", "ଫୁଲକୋବି", "କଲିଫ୍ଲାଓ୍ୱାର୍"],
    ["Pumpkin", "କଖାରୁ", "ପମ୍ପକିନ୍"], ["Okra", "ଢେଙ୍କିଡ଼", "ଓକ୍ରା"], ["Cucumber", "କାକୁଡ଼ି", "କ୍ୟୁକମ୍ବର୍"],
    ["Carrot", "ଗାଜର", "କାରଟ୍"], ["Spinach", "ପାଳଙ୍ଗ ଶାଗ", "ସ୍ପିନାଚ୍"], ["Green Chili", "କଞ୍ଚା ଲଙ୍କା", "ଗ୍ରିନ୍ ଚିଲି"],
    ["Garlic", "ରସୁଣ", "ଗାର୍ଲିକ୍"], ["Ginger", "ଅଦା", "ଜିଞ୍ଜର୍"], ["Peas", "ମଟର", "ପିଜ୍"],
  ]),
  cat("fruits", "Fruits", "ଫଳ", [
    ["Mango", "ଆମ", "ମ୍ୟାଙ୍ଗୋ"], ["Banana", "କଦଳୀ", "ବନାନା"], ["Apple", "ସେଓ", "ଆପଲ୍"],
    ["Papaya", "ଅମୃତଭଣ୍ଡା", "ପାପାୟା"], ["Guava", "ପିଜୁଳି", "ଗୁଆଭା"], ["Orange", "କମଳା", "ଅରେଞ୍ଜ୍"],
    ["Watermelon", "ତରଭୁଜ", "ୱାଟରମେଲନ୍"], ["Grapes", "ଅଙ୍ଗୁର", "ଗ୍ରେପ୍ସ"], ["Pineapple", "ସପରି", "ପାଇନ୍ ଆପଲ୍"],
    ["Coconut", "ନଡ଼ିଆ", "କୋକୋନଟ୍"], ["Jackfruit", "ପଣସ", "ଜାକ୍‌ଫ୍ରୁଟ୍"], ["Lemon", "ଲେମ୍ବୁ", "ଲେମନ୍"],
  ]),
  cat("groceries", "Groceries", "ମୁଦିଖାନା ସାମଗ୍ରୀ", [
    ["Wheat Flour", "ଗହମ ଚୂନା", "ୱିଟ୍ ଫ୍ଲାଉର୍"], ["Lentils", "ଡାଲି", "ଲେଣ୍ଟିଲ୍ସ"], ["Cooking Oil", "ରୋଷେଇ ତେଲ", "କୁକିଙ୍ଗ ଅଏଲ୍"],
    ["Spices", "ମସଲା", "ସ୍ପାଇସେସ୍"], ["Soap", "ସାବୁନ", "ସୋପ୍"], ["Detergent", "ଡିଟରଜେଣ୍ଟ", "ଡିଟରଜେଣ୍ଟ"],
    ["Matchbox", "ଦିଆସିଲି", "ମ୍ୟାଚ୍‌ବକ୍ସ"], ["Candle", "ମହମବତୀ", "କ୍ୟାଣ୍ଡଲ୍"], ["Biscuit", "ବିସ୍କୁଟ", "ବିସ୍କିଟ୍"],
    ["Toothpaste", "ଦନ୍ତମଞ୍ଜନ", "ଟୁଥପେଷ୍ଟ"], ["Shampoo", "ଶ୍ୟାମ୍ପୁ", "ଶ୍ୟାମ୍ପୁ"], ["Basket", "ଟୋକେଇ", "ବାସ୍କେଟ୍"],
  ]),
  cat("trees", "Trees & Plants", "ଗଛ ଓ ଉଦ୍ଭିଦ", [
    ["Mango Tree", "ଆମ୍ବ ଗଛ", "ମ୍ୟାଙ୍ଗୋ ଟ୍ରି"], ["Coconut Tree", "ନଡ଼ିଆ ଗଛ", "କୋକୋନଟ୍ ଟ୍ରି"], ["Banyan Tree", "ବରଗଛ", "ବାନିଆନ୍ ଟ୍ରି"],
    ["Neem Tree", "ନିମ୍ବ ଗଛ", "ନିମ୍ ଟ୍ରି"], ["Tamarind Tree", "ତେନ୍ତୁଳି ଗଛ", "ଟାମାରିଣ୍ଡ ଟ୍ରି"], ["Bamboo", "ବାଉଁଶ", "ବାମ୍ବୁ"],
    ["Flower", "ଫୁଲ", "ଫ୍ଲାୱାର୍"], ["Leaf", "ପତ୍ର", "ଲିଫ୍"], ["Root", "ମୂଳ", "ରୁଟ୍"],
    ["Branch", "ଡାଳ", "ବ୍ରାଞ୍ଚ୍"], ["Seed", "ମଞ୍ଜି", "ସିଡ୍"], ["Grass", "ଘାସ", "ଗ୍ରାସ୍"],
  ]),
  cat("animals", "Animals & Birds", "ପଶୁପକ୍ଷୀ", [
    ["Cow", "ଗାଈ", "କାଉ"], ["Goat", "ଛେଳି", "ଗୋଟ୍"], ["Dog", "କୁକୁର", "ଡଗ୍"],
    ["Cat", "ବିରାଲି", "କ୍ୟାଟ୍"], ["Hen", "କୁକୁଡ଼ା", "ହେନ୍"], ["Buffalo", "ମଇଁଷି", "ବଫେଲୋ"],
    ["Fish", "ମାଛ", "ଫିସ୍"], ["Bird", "ପକ୍ଷୀ", "ବର୍ଡ୍"], ["Elephant", "ହାତୀ", "ଏଲିଫାଣ୍ଟ"],
    ["Tiger", "ବାଘ", "ଟାଇଗର୍"], ["Snake", "ସାପ", "ସ୍ନେକ୍"], ["Duck", "ବତକ", "ଡକ୍"],
  ]),
  cat("weather", "Weather & Seasons", "ପାଣିପାଗ ଓ ଋତୁ", [
    ["Summer", "ଗ୍ରୀଷ୍ମ ଋତୁ", "ସମର୍"], ["Winter", "ଶୀତ ଋତୁ", "ୱିଣ୍ଟର୍"], ["Rainy Season", "ବର୍ଷା ଋତୁ", "ରେନି ସିଜନ୍"],
    ["Sun", "ସୂର୍ଯ୍ୟ", "ସନ୍"], ["Rain", "ବର୍ଷା", "ରେନ୍"], ["Wind", "ପବନ", "ୱିଣ୍ଡ"],
    ["Cloud", "ମେଘ", "କ୍ଲାଉଡ୍"], ["Cold", "ଥଣ୍ଡା", "କୋଲ୍ଡ"], ["Hot", "ଗରମ", "ହଟ୍"],
    ["Storm", "ଝଡ଼", "ଷ୍ଟର୍ମ"], ["Fog", "କୁହୁଡ଼ି", "ଫଗ୍"], ["Thunder", "ବଜ୍ର", "ଥଣ୍ଡର୍"],
  ]),
];

export function allItems(): { category: LessonCategory; item: LessonItem }[] {
  return LESSON_CATEGORIES.flatMap((category) => category.items.map((item) => ({ category, item })));
}
