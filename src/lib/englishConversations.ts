// Everyday and trade-specific English conversations for Odia-speaking
// learners. Each line carries its Odia meaning and an Odia-script phonetic
// guide, same convention as englishLessons.ts, so a dialogue can be read
// aloud even without hearing it spoken.

export type ConversationGroupId =
  | "general"
  | "electrician"
  | "plumber"
  | "carpenter"
  | "mason"
  | "mechanic"
  | "workplace"
  | "travel"
  | "emergency"
  | "errands"
  | "advanced";

export type ConversationLine = {
  id: string;
  speaker: string;
  en: string;
  odiaMeaning: string;
  odiaPhonetic: string;
};

export type ConversationTopic = {
  id: string;
  title: string;
  odiaTitle: string;
  group: ConversationGroupId;
  roles: [string, string];
  lines: ConversationLine[];
};

export const CONVERSATION_GROUPS: { id: ConversationGroupId; label: string; odiaLabel: string; level: "basic" | "advanced" }[] = [
  { id: "general", label: "General Conversations", odiaLabel: "ସାଧାରଣ କଥାବାର୍ତ୍ତା", level: "basic" },
  { id: "electrician", label: "Electrician", odiaLabel: "ବିଜୁଳି ମିସ୍ତ୍ରୀ", level: "basic" },
  { id: "plumber", label: "Plumber", odiaLabel: "ପ୍ଲମ୍ବର", level: "basic" },
  { id: "carpenter", label: "Carpenter", odiaLabel: "ବଢ଼େଇ", level: "basic" },
  { id: "mason", label: "Mason", odiaLabel: "ରାଜମିସ୍ତ୍ରୀ", level: "basic" },
  { id: "mechanic", label: "Mechanic", odiaLabel: "ମେକାନିକ୍", level: "basic" },
  { id: "workplace", label: "Job & Workplace", odiaLabel: "ଚାକିରି ଓ କାର୍ଯ୍ୟସ୍ଥଳ", level: "basic" },
  { id: "travel", label: "Travel & Transport", odiaLabel: "ଯାତ୍ରା ଓ ପରିବହନ", level: "basic" },
  { id: "emergency", label: "Emergencies", odiaLabel: "ଜରୁରୀକାଳୀନ ପରିସ୍ଥିତି", level: "basic" },
  { id: "errands", label: "Daily Errands", odiaLabel: "ଦୈନନ୍ଦିନ କାମ", level: "basic" },
  { id: "advanced", label: "Advanced Conversations", odiaLabel: "ଉନ୍ନତ ସ୍ତରୀୟ କଥାବାର୍ତ୍ତା", level: "advanced" },
];

function topic(
  id: string,
  title: string,
  odiaTitle: string,
  group: ConversationGroupId,
  roles: [string, string],
  rows: [string, string, string, string][],
): ConversationTopic {
  return {
    id,
    title,
    odiaTitle,
    group,
    roles,
    lines: rows.map(([speaker, en, odiaMeaning, odiaPhonetic], i) => ({
      id: `${id}-${i}`,
      speaker,
      en,
      odiaMeaning,
      odiaPhonetic,
    })),
  };
}

export const CONVERSATION_TOPICS: ConversationTopic[] = [
  // ---------- General conversations ----------
  topic("intro", "Introducing Yourself", "ନିଜ ପରିଚୟ ଦେବା", "general", ["You", "New Friend"], [
    ["You", "Hello, my name is Rakesh.", "ହେଲୋ, ମୋ ନାମ ରାକେଶ।", "ହେଲୋ, ମାଇ ନେମ୍ ଇଜ୍ ରାକେଶ୍"],
    ["New Friend", "Nice to meet you, Rakesh. I am Sunita.", "ତୁମକୁ ଭେଟି ଖୁସି ଲାଗିଲା, ରାକେଶ। ମୁଁ ସୁନୀତା।", "ନାଇସ୍ ଟୁ ମିଟ୍ ୟୁ, ରାକେଶ୍। ଆଇ ଆମ୍ ସୁନୀତା"],
    ["You", "Where are you from?", "ତୁମେ କେଉଁଠାରୁ ଆସିଛ?", "ୱେୟାର ଆର୍ ୟୁ ଫ୍ରମ୍"],
    ["New Friend", "I am from Bhubaneswar. And you?", "ମୁଁ ଭୁବନେଶ୍ୱରରୁ ଆସିଛି। ଆଉ ତୁମେ?", "ଆଇ ଆମ୍ ଫ୍ରମ୍ ଭୁବନେଶ୍ୱର। ଆଣ୍ଡ ୟୁ"],
    ["You", "I am from Cuttack. What do you do?", "ମୁଁ କଟକରୁ ଆସିଛି। ତୁମେ କଣ କର?", "ଆଇ ଆମ୍ ଫ୍ରମ୍ କଟକ୍। ୱଟ୍ ଡୁ ୟୁ ଡୁ"],
    ["New Friend", "I am a teacher. What about you?", "ମୁଁ ଜଣେ ଶିକ୍ଷୟିତ୍ରୀ। ତୁମେ କଣ?", "ଆଇ ଆମ୍ ଏ ଟିଚର୍। ୱଟ୍ ଅବାଉଟ୍ ୟୁ"],
    ["You", "I am an electrician.", "ମୁଁ ଜଣେ ବିଜୁଳି ମିସ୍ତ୍ରୀ।", "ଆଇ ଆମ୍ ଆନ୍ ଇଲେକ୍ଟ୍ରିସିଆନ୍"],
    ["New Friend", "Nice to know you. See you again.", "ତୁମକୁ ଜାଣି ଖୁସି ଲାଗିଲା। ପୁଣି ଭେଟିବା।", "ନାଇସ୍ ଟୁ ନୋ ୟୁ। ସି ୟୁ ଆଗେନ୍"],
  ]),
  topic("smalltalk", "Small Talk with a Neighbour", "ପଡ଼ୋଶୀ ସହିତ ସାଧାରଣ କଥାବାର୍ତ୍ତା", "general", ["Neighbour", "You"], [
    ["Neighbour", "Good morning! How are you today?", "ସୁପ୍ରଭାତ! ଆଜି ତୁମେ କେମିତି ଅଛ?", "ଗୁଡ୍ ମର୍ନିଙ୍ଗ! ହାଉ ଆର୍ ୟୁ ଟୁଡେ"],
    ["You", "I am fine, thank you. And you?", "ମୁଁ ଭଲ ଅଛି, ଧନ୍ୟବାଦ। ଆଉ ତୁମେ?", "ଆଇ ଆମ୍ ଫାଇନ୍, ଥାଙ୍କ ୟୁ। ଆଣ୍ଡ ୟୁ"],
    ["Neighbour", "I am also fine. How is your family?", "ମୁଁ ମଧ୍ୟ ଭଲ ଅଛି। ତୁମ ପରିବାର କେମିତି ଅଛନ୍ତି?", "ଆଇ ଆମ୍ ଅଲସୋ ଫାଇନ୍। ହାଉ ଇଜ୍ ୟୁଅର୍ ଫ୍ୟାମିଲି"],
    ["You", "They are doing well.", "ସେମାନେ ଭଲରେ ଅଛନ୍ତି।", "ଦେ ଆର୍ ଡୁଇଙ୍ଗ ୱେଲ୍"],
    ["Neighbour", "It is very hot today, isn't it?", "ଆଜି ବହୁତ ଗରମ, ନୁହେଁ କି?", "ଇଟ୍ ଇଜ୍ ଭେରି ହଟ୍ ଟୁଡେ, ଇଜେନ୍ଟ୍ ଇଟ୍"],
    ["You", "Yes, very hot. Rain may come in the evening.", "ହଁ, ବହୁତ ଗରମ। ସନ୍ଧ୍ୟାରେ ବର୍ଷା ହୋଇପାରେ।", "ୟେସ୍, ଭେରି ହଟ୍। ରେନ୍ ମେ କମ୍ ଇନ୍ ଦି ଇଭନିଙ୍ଗ"],
    ["Neighbour", "I hope so. Take care.", "ଆଶା କରୁଛି। ଯତ୍ନ ନିଅ।", "ଆଇ ହୋପ୍ ସୋ। ଟେକ୍ କେୟାର୍"],
    ["You", "You too. See you later.", "ତୁମେ ମଧ୍ୟ। ପରେ ଭେଟିବା।", "ୟୁ ଟୁ। ସି ୟୁ ଲେଟର୍"],
  ]),
  topic("directions", "Asking for Directions", "ରାସ୍ତା ପଚାରିବା", "general", ["You", "Stranger"], [
    ["You", "Excuse me, where is the bus stand?", "କ୍ଷମା କରିବେ, ବସ୍ ଷ୍ଟାଣ୍ଡ କେଉଁଠାରେ ଅଛି?", "ଏକ୍ସକ୍ୟୁଜ୍ ମି, ୱେୟାର ଇଜ୍ ଦ ବସ୍ ଷ୍ଟାଣ୍ଡ"],
    ["Stranger", "Go straight and turn left.", "ସିଧା ଯାଆନ୍ତୁ ଏବଂ ବାମକୁ ଫେରନ୍ତୁ।", "ଗୋ ଷ୍ଟ୍ରେଟ୍ ଆଣ୍ଡ ଟର୍ନ୍ ଲେଫ୍ଟ"],
    ["You", "Is it far from here?", "ଏଠାରୁ ଦୂର କି?", "ଇଜ୍ ଇଟ୍ ଫାର୍ ଫ୍ରମ୍ ହିଅର୍"],
    ["Stranger", "No, it is just five minutes' walk.", "ନା, ମାତ୍ର ପାଞ୍ଚ ମିନିଟ୍ ଚାଲିବା ପଥ।", "ନୋ, ଇଟ୍ ଇଜ୍ ଜଷ୍ଟ ଫାଇଭ୍ ମିନିଟ୍ସ ୱାକ୍"],
    ["You", "Thank you very much.", "ବହୁତ ଧନ୍ୟବାଦ।", "ଥାଙ୍କ ୟୁ ଭେରି ମଚ୍"],
    ["Stranger", "You are welcome.", "ତୁମର ସ୍ୱାଗତ।", "ୟୁ ଆର୍ ୱେଲକମ୍"],
  ]),
  topic("restaurant", "Ordering Food at a Restaurant", "ରେଷ୍ଟୁରାଣ୍ଟରେ ଖାଦ୍ୟ ମାଗିବା", "general", ["Waiter", "You"], [
    ["Waiter", "Welcome! What would you like to order?", "ସ୍ୱାଗତ! ଆପଣ କଣ ମାଗିବେ?", "ୱେଲକମ୍! ୱଟ୍ ୱୁଡ୍ ୟୁ ଲାଇକ୍ ଟୁ ଅର୍ଡର୍"],
    ["You", "Please give me the menu.", "ଦୟାକରି ମେନୁ ଦିଅନ୍ତୁ।", "ପ୍ଲିଜ୍ ଗିଭ୍ ମି ଦ ମେନୁ"],
    ["Waiter", "Here is the menu, sir.", "ମହାଶୟ, ଏହି ରହିଲା ମେନୁ।", "ହିଅର୍ ଇଜ୍ ଦ ମେନୁ, ସାର୍"],
    ["You", "I would like one plate of rice and dal.", "ମୋତେ ଗୋଟିଏ ପ୍ଲେଟ୍ ଭାତ ଓ ଡାଲି ଦରକାର।", "ଆଇ ୱୁଡ୍ ଲାଇକ୍ ୱାନ୍ ପ୍ଲେଟ୍ ଅଫ୍ ରାଇସ୍ ଆଣ୍ଡ ଡାଲ୍"],
    ["Waiter", "Anything to drink?", "ପିଇବାକୁ କିଛି ଦରକାର କି?", "ଏନିଥିଙ୍ଗ ଟୁ ଡ୍ରିଙ୍କ"],
    ["You", "One glass of water, please.", "ଦୟାକରି ଏକ ଗ୍ଲାସ୍ ପାଣି।", "ୱାନ୍ ଗ୍ଲାସ୍ ଅଫ୍ ୱାଟର୍, ପ୍ଲିଜ୍"],
    ["Waiter", "Sure. It will come in ten minutes.", "ଠିକ୍ ଅଛି। ଏହା ଦଶ ମିନିଟରେ ଆସିବ।", "ସ୍ୱୋର୍। ଇଟ୍ ୱିଲ୍ କମ୍ ଇନ୍ ଟେନ୍ ମିନିଟ୍ସ"],
    ["You", "Thank you.", "ଧନ୍ୟବାଦ।", "ଥାଙ୍କ ୟୁ"],
  ]),
  topic("market", "Shopping at a Market", "ବଜାରରେ କିଣାକଣା", "general", ["You", "Shopkeeper"], [
    ["You", "How much does this cost?", "ଏହାର ଦାମ୍ କେତେ?", "ହାଉ ମଚ୍ ଡଜ୍ ଦିସ୍ କଷ୍ଟ"],
    ["Shopkeeper", "This costs one hundred rupees.", "ଏହାର ଦାମ୍ ଏକ ଶହ ଟଙ୍କା।", "ଦିସ୍ କଷ୍ଟସ୍ ୱାନ୍ ହଣ୍ଡ୍ରେଡ୍ ରୁପିଜ୍"],
    ["You", "Can you give it for eighty rupees?", "ଅଶୀ ଟଙ୍କାରେ ଦେଇପାରିବେ କି?", "କ୍ୟାନ୍ ୟୁ ଗିଭ୍ ଇଟ୍ ଫର୍ ଏଟି ରୁପିଜ୍"],
    ["Shopkeeper", "Okay, take it for eighty-five.", "ଠିକ୍ ଅଛି, ପଞ୍ଚାଅଶୀ ଟଙ୍କାରେ ନିଅନ୍ତୁ।", "ଓକେ, ଟେକ୍ ଇଟ୍ ଫର୍ ଏଟି-ଫାଇଭ୍"],
    ["You", "Alright, I will take two of these.", "ଠିକ୍ ଅଛି, ମୁଁ ଏଥିରୁ ଦୁଇଟି ନେବି।", "ଅଲରାଇଟ୍, ଆଇ ୱିଲ୍ ଟେକ୍ ଟୁ ଅଫ୍ ଦିଜ୍"],
    ["Shopkeeper", "Here you go. Anything else?", "ଏହି ନିଅନ୍ତୁ। ଆଉ କିଛି ଦରକାର କି?", "ହିଅର୍ ୟୁ ଗୋ। ଏନିଥିଙ୍ଗ ଏଲ୍ସ"],
    ["You", "No, that's all. Thank you.", "ନା, ଏତିକି ହିଁ। ଧନ୍ୟବାଦ।", "ନୋ, ଦାଟସ୍ ଅଲ୍। ଥାଙ୍କ ୟୁ"],
  ]),
  topic("doctor", "At the Doctor's Clinic", "ଡାକ୍ତରଖାନାରେ", "general", ["Doctor", "Patient"], [
    ["Doctor", "What is the problem?", "ସମସ୍ୟା କଣ?", "ୱଟ୍ ଇଜ୍ ଦ ପ୍ରବ୍ଲେମ୍"],
    ["Patient", "I have a headache and fever.", "ମୋର ମୁଣ୍ଡବିନ୍ଧା ଓ ଜ୍ୱର ଅଛି।", "ଆଇ ହେଭ୍ ଏ ହେଡେକ୍ ଆଣ୍ଡ ଫିଭର୍"],
    ["Doctor", "Since when?", "କେବେଠାରୁ?", "ସିନ୍ସ ୱେନ୍"],
    ["Patient", "Since yesterday evening.", "ଗତକାଲି ସନ୍ଧ୍ୟାରୁ।", "ସିନ୍ସ ୟେଷ୍ଟର୍ଡେ ଇଭନିଙ୍ଗ"],
    ["Doctor", "Take this medicine twice a day.", "ଏହି ଔଷଧ ଦିନକୁ ଦୁଇଥର ଖାଅନ୍ତୁ।", "ଟେକ୍ ଦିସ୍ ମେଡିସିନ୍ ଟ୍ୱାଇସ୍ ଏ ଡେ"],
    ["Patient", "Should I take it before or after food?", "ଖାଦ୍ୟ ପୂର୍ବରୁ ନା ପରେ ଖାଇବି?", "ସୁଡ୍ ଆଇ ଟେକ୍ ଇଟ୍ ବିଫୋର୍ ଅର୍ ଆଫ୍ଟର୍ ଫୁଡ୍"],
    ["Doctor", "After food. And take rest.", "ଖାଦ୍ୟ ପରେ। ଏବଂ ବିଶ୍ରାମ ନିଅନ୍ତୁ।", "ଆଫ୍ଟର୍ ଫୁଡ୍। ଆଣ୍ଡ ଟେକ୍ ରେଷ୍ଟ"],
    ["Patient", "Thank you, doctor.", "ଧନ୍ୟବାଦ, ଡାକ୍ତର।", "ଥାଙ୍କ ୟୁ, ଡକ୍ଟର"],
  ]),
  topic("phone", "Talking on the Phone", "ଫୋନରେ କଥାବାର୍ତ୍ତା", "general", ["You", "Caller"], [
    ["You", "Hello, who is speaking?", "ହେଲୋ, କିଏ କହୁଛନ୍ତି?", "ହେଲୋ, ହୁ ଇଜ୍ ସ୍ପିକିଙ୍ଗ"],
    ["Caller", "Hello, this is Manoj.", "ହେଲୋ, ମୁଁ ମନୋଜ କହୁଛି।", "ହେଲୋ, ଦିସ୍ ଇଜ୍ ମନୋଜ"],
    ["You", "Hi Manoj, how can I help you?", "ହାଏ ମନୋଜ, ମୁଁ କିପରି ସାହାଯ୍ୟ କରିପାରିବି?", "ହାଏ ମନୋଜ, ହାଉ କେନ୍ ଆଇ ହେଲ୍ପ ୟୁ"],
    ["Caller", "Can you come tomorrow morning?", "କାଲି ସକାଳେ ଆସିପାରିବେ କି?", "କ୍ୟାନ୍ ୟୁ କମ୍ ଟୁମରୋ ମର୍ନିଙ୍ଗ"],
    ["You", "Yes, I will come at nine o'clock.", "ହଁ, ମୁଁ ନଅଟାରେ ଆସିବି।", "ୟେସ୍, ଆଇ ୱିଲ୍ କମ୍ ଆଟ୍ ନାଇନ୍ ଓ'କ୍ଲକ୍"],
    ["Caller", "Okay, see you then.", "ଠିକ୍ ଅଛି, ତେବେ ଭେଟିବା।", "ଓକେ, ସି ୟୁ ଦେନ୍"],
    ["You", "See you. Bye.", "ଭେଟିବା। ବିଦାୟ।", "ସି ୟୁ। ବାଏ"],
  ]),
  topic("bank", "At the Bank", "ବ୍ୟାଙ୍କରେ", "general", ["You", "Bank Clerk"], [
    ["You", "I want to open a new account.", "ମୁଁ ଏକ ନୂଆ ଖାତା ଖୋଲିବାକୁ ଚାହେଁ।", "ଆଇ ୱାଣ୍ଟ ଟୁ ଓପନ୍ ଏ ନ୍ୟୁ ଆକାଉଣ୍ଟ"],
    ["Bank Clerk", "Please fill this form.", "ଦୟାକରି ଏହି ଫର୍ମ ପୂରଣ କରନ୍ତୁ।", "ପ୍ଲିଜ୍ ଫିଲ୍ ଦିସ୍ ଫର୍ମ"],
    ["You", "What documents do I need?", "ମୋତେ କି କି କାଗଜପତ୍ର ଦରକାର?", "ୱଟ୍ ଡକ୍ୟୁମେଣ୍ଟସ୍ ଡୁ ଆଇ ନିଡ୍"],
    ["Bank Clerk", "You need your ID proof and address proof.", "ଆପଣଙ୍କୁ ପରିଚୟପତ୍ର ଓ ଠିକଣା ପ୍ରମାଣ ଦରକାର।", "ୟୁ ନିଡ୍ ୟୁଅର୍ ଆଇଡି ପ୍ରୁଫ୍ ଆଣ୍ଡ ଆଡ୍ରେସ୍ ପ୍ରୁଫ୍"],
    ["You", "I have brought both.", "ମୁଁ ଦୁଇଟିଯାକ ଆଣିଛି।", "ଆଇ ହେଭ୍ ବ୍ରଟ୍ ବୋଥ୍"],
    ["Bank Clerk", "Good. Your account will open today.", "ବହୁତ ଭଲ। ଆଜି ଆପଣଙ୍କ ଖାତା ଖୁଲିଯିବ।", "ଗୁଡ୍। ୟୁଅର୍ ଆକାଉଣ୍ଟ ୱିଲ୍ ଓପନ୍ ଟୁଡେ"],
    ["You", "Thank you for your help.", "ସାହାଯ୍ୟ ପାଇଁ ଧନ୍ୟବାଦ।", "ଥାଙ୍କ ୟୁ ଫର୍ ୟୁଅର୍ ହେଲ୍ପ"],
  ]),

  // ---------- Electrician ----------
  topic("elec-newcustomer", "Meeting a New Customer", "ନୂଆ ଗ୍ରାହକଙ୍କୁ ଭେଟିବା", "electrician", ["Customer", "Electrician"], [
    ["Customer", "Hello, I called about a wiring problem.", "ହେଲୋ, ମୁଁ ତାରର ସମସ୍ୟା ବିଷୟରେ ଫୋନ କରିଥିଲି।", "ହେଲୋ, ଆଇ କଲ୍ଡ ଅବାଉଟ୍ ଏ ୱାୟାରିଙ୍ଗ ପ୍ରବ୍ଲେମ୍"],
    ["Electrician", "Yes, I am the electrician. Where is the problem?", "ହଁ, ମୁଁ ବିଜୁଳି ମିସ୍ତ୍ରୀ। ସମସ୍ୟା କେଉଁଠି ଅଛି?", "ୟେସ୍, ଆଇ ଆମ୍ ଦ ଇଲେକ୍ଟ୍ରିସିଆନ୍। ୱେୟାର ଇଜ୍ ଦ ପ୍ରବ୍ଲେମ୍"],
    ["Customer", "The lights in the kitchen are not working.", "ରୋଷେଇଘରର ଲାଇଟ୍ ଜଳୁନାହିଁ।", "ଦ ଲାଇଟ୍ସ ଇନ୍ ଦ କିଚେନ୍ ଆର୍ ନଟ୍ ୱର୍କିଙ୍ଗ"],
    ["Electrician", "Okay, let me check the switchboard first.", "ଠିକ୍ ଅଛି, ପ୍ରଥମେ ସୁଇଚ୍‌ବୋର୍ଡ ଦେଖେ।", "ଓକେ, ଲେଟ୍ ମି ଚେକ୍ ଦ ସ୍ୱିଚ୍‌ବୋର୍ଡ ଫର୍ଷ୍ଟ"],
    ["Customer", "Is it something serious?", "ଏହା କିଛି ଗମ୍ଭୀର ବିଷୟ କି?", "ଇଜ୍ ଇଟ୍ ସମଥିଙ୍ଗ ସିରିଅସ୍"],
    ["Electrician", "I need to check first. Do you have a torch?", "ପ୍ରଥମେ ମୋତେ ଯାଞ୍ଚ କରିବାକୁ ପଡ଼ିବ। ଆପଣଙ୍କ ପାଖରେ ଟର୍ଚ୍ ଅଛି କି?", "ଆଇ ନିଡ୍ ଟୁ ଚେକ୍ ଫର୍ଷ୍ଟ। ଡୁ ୟୁ ହେଭ୍ ଏ ଟର୍ଚ୍"],
    ["Customer", "Yes, here it is.", "ହଁ, ଏହି ରହିଲା।", "ୟେସ୍, ହିଅର୍ ଇଟ୍ ଇଜ୍"],
  ]),
  topic("elec-diagnose", "Diagnosing an Electrical Problem", "ବିଜୁଳି ସମସ୍ୟା ଚିହ୍ନଟ କରିବା", "electrician", ["Electrician", "Customer"], [
    ["Electrician", "First, I will switch off the main power.", "ପ୍ରଥମେ, ମୁଁ ମୁଖ୍ୟ ବିଜୁଳି ବନ୍ଦ କରିବି।", "ଫର୍ଷ୍ଟ, ଆଇ ୱିଲ୍ ସ୍ୱିଚ୍ ଅଫ୍ ଦ ମେନ୍ ପାୱାର୍"],
    ["Customer", "Okay, be careful.", "ଠିକ୍ ଅଛି, ସାବଧାନ ରୁହନ୍ତୁ।", "ଓକେ, ବି କେୟାରଫୁଲ୍"],
    ["Electrician", "There is a short circuit in this wire.", "ଏହି ତାରରେ ଏକ ସର୍ଟ ସର୍କିଟ୍ ଅଛି।", "ଦେର୍ ଇଜ୍ ଏ ସର୍ଟ ସର୍କିଟ୍ ଇନ୍ ଦିସ୍ ୱାୟାର୍"],
    ["Customer", "How did that happen?", "ଏହା କିପରି ହେଲା?", "ହାଉ ଡିଡ୍ ଦାଟ୍ ହାପେନ୍"],
    ["Electrician", "The wire is old and the insulation is damaged.", "ତାରଟି ପୁରୁଣା ଏବଂ ଇନ୍ସୁଲେସନ୍ ଖରାପ ହୋଇଯାଇଛି।", "ଦ ୱାୟାର୍ ଇଜ୍ ଓଲ୍ଡ ଆଣ୍ଡ ଦ ଇନ୍ସୁଲେସନ୍ ଇଜ୍ ଡ୍ୟାମେଜ୍ଡ"],
    ["Customer", "Can you fix it today?", "ଆଜି ଠିକ୍ କରିପାରିବେ କି?", "କ୍ୟାନ୍ ୟୁ ଫିକ୍ସ ଇଟ୍ ଟୁଡେ"],
    ["Electrician", "Yes, I will replace the wire now.", "ହଁ, ମୁଁ ବର୍ତ୍ତମାନ ତାରଟି ବଦଳାଇ ଦେବି।", "ୟେସ୍, ଆଇ ୱିଲ୍ ରିପ୍ଲେସ୍ ଦ ୱାୟାର୍ ନାଉ"],
  ]),
  topic("elec-estimate", "Explaining Repair and Giving an Estimate", "ମରାମତି ବୁଝାଇବା ଓ ଦାମ୍ କହିବା", "electrician", ["Electrician", "Customer"], [
    ["Electrician", "You need a new switch and some wire.", "ଆପଣଙ୍କୁ ଏକ ନୂଆ ସୁଇଚ୍ ଓ କିଛି ତାର ଦରକାର।", "ୟୁ ନିଡ୍ ଏ ନ୍ୟୁ ସ୍ୱିଚ୍ ଆଣ୍ଡ ସମ୍ ୱାୟାର୍"],
    ["Customer", "How much will it cost?", "ଏଥିରେ କେତେ ଖର୍ଚ୍ଚ ହେବ?", "ହାଉ ମଚ୍ ୱିଲ୍ ଇଟ୍ କଷ୍ଟ"],
    ["Electrician", "It will cost around five hundred rupees.", "ପ୍ରାୟ ପାଞ୍ଚ ଶହ ଟଙ୍କା ଖର୍ଚ୍ଚ ହେବ।", "ଇଟ୍ ୱିଲ୍ କଷ୍ଟ ଅରାଉଣ୍ଡ ଫାଇଭ୍ ହଣ୍ଡ୍ରେଡ୍ ରୁପିଜ୍"],
    ["Customer", "Does that include the material?", "ଏଥିରେ ସାମଗ୍ରୀ ମଧ୍ୟ ଅଛି କି?", "ଡଜ୍ ଦାଟ୍ ଇନ୍‌କ୍ଲୁଡ୍ ଦ ମେଟେରିଆଲ୍"],
    ["Electrician", "Yes, material and labour both.", "ହଁ, ସାମଗ୍ରୀ ଏବଂ କାମ ଦୁଇଟିଯାକ।", "ୟେସ୍, ମେଟେରିଆଲ୍ ଆଣ୍ଡ ଲେବର୍ ବୋଥ୍"],
    ["Customer", "Okay, please go ahead.", "ଠିକ୍ ଅଛି, ଦୟାକରି କାମ ଆରମ୍ଭ କରନ୍ତୁ।", "ଓକେ, ପ୍ଲିଜ୍ ଗୋ ଆହେଡ୍"],
    ["Electrician", "It will take about one hour.", "ଏଥିରେ ପ୍ରାୟ ଏକ ଘଣ୍ଟା ଲାଗିବ।", "ଇଟ୍ ୱିଲ୍ ଟେକ୍ ଅବାଉଟ୍ ୱାନ୍ ଆୱାର୍"],
  ]),
  topic("elec-safety", "Safety Warning on Site", "କାର୍ଯ୍ୟସ୍ଥଳରେ ସୁରକ୍ଷା ଚେତାବନୀ", "electrician", ["Electrician", "Helper"], [
    ["Electrician", "Turn off the main switch before you touch this.", "ଏହାକୁ ଛୁଇଁବା ପୂର୍ବରୁ ମୁଖ୍ୟ ସୁଇଚ୍ ବନ୍ଦ କର।", "ଟର୍ନ୍ ଅଫ୍ ଦ ମେନ୍ ସ୍ୱିଚ୍ ବିଫୋର୍ ୟୁ ଟଚ୍ ଦିସ୍"],
    ["Helper", "Okay, I turned it off.", "ଠିକ୍ ଅଛି, ମୁଁ ବନ୍ଦ କରିଦେଲି।", "ଓକେ, ଆଇ ଟର୍ନ୍ଡ ଇଟ୍ ଅଫ୍"],
    ["Electrician", "Always wear rubber gloves and shoes.", "ସବୁବେଳେ ରବର ଗ୍ଲୋଭ୍ସ ଓ ଜୋତା ପିନ୍ଧ।", "ଅଲୱେଜ୍ ୱେୟାର୍ ରବର୍ ଗ୍ଲୋଭ୍ସ ଆଣ୍ଡ ସୁଜ୍"],
    ["Helper", "Yes, I am wearing them.", "ହଁ, ମୁଁ ପିନ୍ଧିଛି।", "ୟେସ୍, ଆଇ ଆମ୍ ୱେରିଙ୍ଗ ଦେମ୍"],
    ["Electrician", "Never touch a live wire with wet hands.", "ଓଦା ହାତରେ କେବେ ବି ଜୀବନ୍ତ ତାର ଛୁଅଁ ନାହିଁ।", "ନେଭର୍ ଟଚ୍ ଏ ଲାଇଭ୍ ୱାୟାର୍ ୱିଥ୍ ୱେଟ୍ ହ୍ୟାଣ୍ଡସ୍"],
    ["Helper", "I understand. I will be careful.", "ମୁଁ ବୁଝିଗଲି। ମୁଁ ସାବଧାନ ରହିବି।", "ଆଇ ଅଣ୍ଡରଷ୍ଟାଣ୍ଡ। ଆଇ ୱିଲ୍ ବି କେୟାରଫୁଲ୍"],
    ["Electrician", "Good. Safety comes first.", "ବହୁତ ଭଲ। ସୁରକ୍ଷା ସର୍ବଦା ପ୍ରଥମ।", "ଗୁଡ୍। ସେଫ୍‌ଟି କମ୍ସ ଫର୍ଷ୍ଟ"],
  ]),
  topic("elec-supervisor", "Talking to a Supervisor", "ସୁପରଭାଇଜରଙ୍କ ସହିତ କଥାବାର୍ତ୍ତା", "electrician", ["Supervisor", "Electrician"], [
    ["Supervisor", "How is the wiring work at site two?", "ସାଇଟ୍ ଦୁଇରେ ତାର ଲଗାଇବା କାମ କେମିତି ଚାଲୁଛି?", "ହାଉ ଇଜ୍ ଦ ୱାୟାରିଙ୍ଗ ୱର୍କ ଆଟ୍ ସାଇଟ୍ ଟୁ"],
    ["Electrician", "It is almost finished, sir.", "ମହାଶୟ, ପ୍ରାୟ ସରିଗଲାଣି।", "ଇଟ୍ ଇଜ୍ ଅଲମୋଷ୍ଟ ଫିନିସ୍ଡ, ସାର୍"],
    ["Supervisor", "Do you need any more material?", "ଆଉ କିଛି ସାମଗ୍ରୀ ଦରକାର କି?", "ଡୁ ୟୁ ନିଡ୍ ଏନି ମୋର୍ ମେଟେରିଆଲ୍"],
    ["Electrician", "Yes, I need ten more meters of wire.", "ହଁ, ମୋତେ ଆଉ ଦଶ ମିଟର ତାର ଦରକାର।", "ୟେସ୍, ଆଇ ନିଡ୍ ଟେନ୍ ମୋର୍ ମିଟର୍ସ ଅଫ୍ ୱାୟାର୍"],
    ["Supervisor", "Okay, I will send it today.", "ଠିକ୍ ଅଛି, ମୁଁ ଆଜି ପଠାଇଦେବି।", "ଓକେ, ଆଇ ୱିଲ୍ ସେଣ୍ଡ ଇଟ୍ ଟୁଡେ"],
    ["Electrician", "Thank you. The work will finish by evening.", "ଧନ୍ୟବାଦ। କାମ ସନ୍ଧ୍ୟା ସୁଦ୍ଧା ସରିଯିବ।", "ଥାଙ୍କ ୟୁ। ଦ ୱର୍କ ୱିଲ୍ ଫିନିସ୍ ବାଇ ଇଭନିଙ୍ଗ"],
  ]),
  topic("elec-supplier", "Ordering Materials from a Hardware Shop", "ହାର୍ଡୱେୟାର ଦୋକାନରୁ ସାମଗ୍ରୀ ମାଗିବା", "electrician", ["Electrician", "Shopkeeper"], [
    ["Electrician", "I need two switches and a bulb holder.", "ମୋତେ ଦୁଇଟି ସୁଇଚ୍ ଓ ଏକ ବଲ୍ବ ହୋଲ୍ଡର ଦରକାର।", "ଆଇ ନିଡ୍ ଟୁ ସ୍ୱିଚେସ୍ ଆଣ୍ଡ ଏ ବଲ୍ବ ହୋଲ୍ଡର୍"],
    ["Shopkeeper", "What brand do you want?", "ଆପଣ କେଉଁ ବ୍ରାଣ୍ଡ ଚାହାଁନ୍ତି?", "ୱଟ୍ ବ୍ରାଣ୍ଡ ଡୁ ୟୁ ୱାଣ୍ଟ"],
    ["Electrician", "Give me the good quality one.", "ମୋତେ ଭଲ କ୍ୱାଲିଟିର ଦିଅନ୍ତୁ।", "ଗିଭ୍ ମି ଦ ଗୁଡ୍ କ୍ୱାଲିଟି ୱାନ୍"],
    ["Shopkeeper", "Do you also need a fuse wire?", "ଆପଣଙ୍କୁ ଫ୍ୟୁଜ୍ ତାର ମଧ୍ୟ ଦରକାର କି?", "ଡୁ ୟୁ ଅଲସୋ ନିଡ୍ ଏ ଫ୍ୟୁଜ୍ ୱାୟାର୍"],
    ["Electrician", "Yes, give me one packet.", "ହଁ, ମୋତେ ଗୋଟିଏ ପ୍ୟାକେଟ୍ ଦିଅନ୍ତୁ।", "ୟେସ୍, ଗିଭ୍ ମି ୱାନ୍ ପ୍ୟାକେଟ୍"],
    ["Shopkeeper", "The total is two hundred rupees.", "ମୋଟ ଦୁଇ ଶହ ଟଙ୍କା ହେଲା।", "ଦ ଟୋଟାଲ୍ ଇଜ୍ ଟୁ ହଣ୍ଡ୍ରେଡ୍ ରୁପିଜ୍"],
    ["Electrician", "Here you go. Please give a bill.", "ଏହି ନିଅନ୍ତୁ। ଦୟାକରି ଏକ ବିଲ୍ ଦିଅନ୍ତୁ।", "ହିଅର୍ ୟୁ ଗୋ। ପ୍ଲିଜ୍ ଗିଭ୍ ଏ ବିଲ୍"],
  ]),

  // ---------- Plumber ----------
  topic("plumb-newjob", "Meeting a Customer", "ଗ୍ରାହକଙ୍କୁ ଭେଟିବା", "plumber", ["Customer", "Plumber"], [
    ["Customer", "The tap in the bathroom is leaking.", "ବାଥରୁମ୍‌ର ନଲ ଲିକ୍ ହେଉଛି।", "ଦ ଟ୍ୟାପ୍ ଇନ୍ ଦ ବାଥ୍‌ରୁମ୍ ଇଜ୍ ଲିକିଙ୍ଗ"],
    ["Plumber", "Okay, let me see it.", "ଠିକ୍ ଅଛି, ମୋତେ ଦେଖିବାକୁ ଦିଅ।", "ଓକେ, ଲେଟ୍ ମି ସି ଇଟ୍"],
    ["Customer", "It has been leaking since morning.", "ସକାଳରୁ ଏହା ଲିକ୍ ହେଉଛି।", "ଇଟ୍ ହ୍ୟାଜ୍ ବିନ୍ ଲିକିଙ୍ଗ ସିନ୍ସ ମର୍ନିଙ୍ଗ"],
    ["Plumber", "The washer is worn out. I will change it.", "ୱାସର ନଷ୍ଟ ହୋଇଯାଇଛି। ମୁଁ ଏହାକୁ ବଦଳାଇବି।", "ଦ ୱାସର୍ ଇଜ୍ ୱର୍ନ୍ ଆଉଟ୍। ଆଇ ୱିଲ୍ ଚେଞ୍ଜ ଇଟ୍"],
    ["Customer", "How long will it take?", "ଏଥିରେ କେତେ ସମୟ ଲାଗିବ?", "ହାଉ ଲଙ୍ଗ ୱିଲ୍ ଇଟ୍ ଟେକ୍"],
    ["Plumber", "Just fifteen minutes.", "ମାତ୍ର ପନ୍ଦର ମିନିଟ୍।", "ଜଷ୍ଟ ଫିଫ୍‌ଟିନ୍ ମିନିଟ୍ସ"],
  ]),
  topic("plumb-diagnose", "Diagnosing a Pipe Problem", "ପାଇପ୍ ସମସ୍ୟା ଚିହ୍ନଟ କରିବା", "plumber", ["Plumber", "Customer"], [
    ["Plumber", "There is a blockage in this pipe.", "ଏହି ପାଇପ୍‌ରେ ଏକ ବ୍ଲକେଜ୍ ଅଛି।", "ଦେର୍ ଇଜ୍ ଏ ବ୍ଲକେଜ୍ ଇନ୍ ଦିସ୍ ପାଇପ୍"],
    ["Customer", "What is causing it?", "ଏହାର କାରଣ କଣ?", "ୱଟ୍ ଇଜ୍ କଜିଙ୍ଗ ଇଟ୍"],
    ["Plumber", "Waste and hair are stuck inside.", "ଆବର୍ଜନା ଓ ବାଳ ଭିତରେ ଅଟକି ରହିଛି।", "ୱେଷ୍ଟ ଆଣ୍ଡ ହେୟାର୍ ଆର୍ ଷ୍ଟକ୍ ଇନ୍‌ସାଇଡ୍"],
    ["Customer", "Can you clean it now?", "ବର୍ତ୍ତମାନ ସଫା କରିପାରିବେ କି?", "କ୍ୟାନ୍ ୟୁ କ୍ଲିନ୍ ଇଟ୍ ନାଉ"],
    ["Plumber", "Yes, I will use this rod.", "ହଁ, ମୁଁ ଏହି ରଡ୍ ବ୍ୟବହାର କରିବି।", "ୟେସ୍, ଆଇ ୱିଲ୍ ୟୁଜ୍ ଦିସ୍ ରଡ୍"],
    ["Customer", "Please be quick.", "ଦୟାକରି ଶୀଘ୍ର କର।", "ପ୍ଲିଜ୍ ବି କ୍ୱିକ୍"],
  ]),
  topic("plumb-estimate", "Cost Estimate", "ଖର୍ଚ୍ଚର ହିସାବ", "plumber", ["Plumber", "Customer"], [
    ["Plumber", "You need a new pipe fitting.", "ଆପଣଙ୍କୁ ଏକ ନୂଆ ପାଇପ୍ ଫିଟିଙ୍ଗ ଦରକାର।", "ୟୁ ନିଡ୍ ଏ ନ୍ୟୁ ପାଇପ୍ ଫିଟିଙ୍ଗ"],
    ["Customer", "How much will that cost?", "ଏଥିରେ କେତେ ଖର୍ଚ୍ଚ ହେବ?", "ହାଉ ମଚ୍ ୱିଲ୍ ଦାଟ୍ କଷ୍ଟ"],
    ["Plumber", "Around three hundred rupees.", "ପ୍ରାୟ ତିନି ଶହ ଟଙ୍କା।", "ଅରାଉଣ୍ଡ ଥ୍ରି ହଣ୍ଡ୍ରେଡ୍ ରୁପିଜ୍"],
    ["Customer", "Okay, please fit it.", "ଠିକ୍ ଅଛି, ଦୟାକରି ଲଗାଇଦିଅ।", "ଓକେ, ପ୍ଲିଜ୍ ଫିଟ୍ ଇଟ୍"],
    ["Plumber", "I will finish it in half an hour.", "ମୁଁ ଆଧ ଘଣ୍ଟାରେ ଏହା ସାରିଦେବି।", "ଆଇ ୱିଲ୍ ଫିନିସ୍ ଇଟ୍ ଇନ୍ ହାଫ୍ ଆନ୍ ଆୱାର୍"],
    ["Customer", "Thank you for coming quickly.", "ଶୀଘ୍ର ଆସିଥିବାରୁ ଧନ୍ୟବାଦ।", "ଥାଙ୍କ ୟୁ ଫର୍ କମିଙ୍ଗ କ୍ୱିକ୍‌ଲି"],
  ]),
  topic("plumb-supplier", "Buying Pipe Fittings", "ପାଇପ୍ ଫିଟିଙ୍ଗ କିଣିବା", "plumber", ["Plumber", "Shopkeeper"], [
    ["Plumber", "I need a half-inch pipe and a tap.", "ମୋତେ ଏକ ହାଫ୍-ଇଞ୍ଚ ପାଇପ୍ ଓ ଏକ ଟ୍ୟାପ୍ ଦରକାର।", "ଆଇ ନିଡ୍ ଏ ହାଫ୍-ଇଞ୍ଚ ପାଇପ୍ ଆଣ୍ଡ ଏ ଟ୍ୟାପ୍"],
    ["Shopkeeper", "How many pipes do you want?", "ଆପଣଙ୍କୁ କେତୋଟି ପାଇପ୍ ଦରକାର?", "ହାଉ ମେନି ପାଇପ୍ସ ଡୁ ୟୁ ୱାଣ୍ଟ"],
    ["Plumber", "Give me three pipes.", "ମୋତେ ତିନୋଟି ପାଇପ୍ ଦିଅନ୍ତୁ।", "ଗିଭ୍ ମି ଥ୍ରି ପାଇପ୍ସ"],
    ["Shopkeeper", "Do you need pipe glue too?", "ଆପଣଙ୍କୁ ପାଇପ୍ ଗୁଣ୍ଡ ମଧ୍ୟ ଦରକାର କି?", "ଡୁ ୟୁ ନିଡ୍ ପାଇପ୍ ଗ୍ଲୁ ଟୁ"],
    ["Plumber", "Yes, one tube please.", "ହଁ, ଦୟାକରି ଗୋଟିଏ ଟ୍ୟୁବ୍।", "ୟେସ୍, ୱାନ୍ ଟ୍ୟୁବ୍ ପ୍ଲିଜ୍"],
    ["Shopkeeper", "That will be four hundred rupees total.", "ମୋଟ ଚାରି ଶହ ଟଙ୍କା ହେବ।", "ଦାଟ୍ ୱିଲ୍ ବି ଫୋର୍ ହଣ୍ଡ୍ରେଡ୍ ରୁପିଜ୍ ଟୋଟାଲ୍"],
  ]),

  // ---------- Carpenter ----------
  topic("carp-newjob", "Discussing a Furniture Job", "ଆସବାବ କାମ ବିଷୟରେ କଥାବାର୍ତ୍ତା", "carpenter", ["Customer", "Carpenter"], [
    ["Customer", "I want a wooden door made.", "ମୋତେ ଏକ କାଠର ଦୁଆର ଦରକାର।", "ଆଇ ୱାଣ୍ଟ ଏ ଉଡେନ୍ ଡୋର୍ ମେଡ୍"],
    ["Carpenter", "What size do you need?", "ଆପଣଙ୍କୁ କେଡ଼େ ମାପର ଦରକାର?", "ୱଟ୍ ସାଇଜ୍ ଡୁ ୟୁ ନିଡ୍"],
    ["Customer", "Seven feet by three feet.", "ସାତ ଫୁଟ୍ ଗୁଣା ତିନି ଫୁଟ୍।", "ସେଭେନ୍ ଫିଟ୍ ବାଇ ଥ୍ରି ଫିଟ୍"],
    ["Carpenter", "What type of wood do you want?", "ଆପଣ କେଉଁ ପ୍ରକାର କାଠ ଚାହାଁନ୍ତି?", "ୱଟ୍ ଟାଇପ୍ ଅଫ୍ ଉଡ୍ ଡୁ ୟୁ ୱାଣ୍ଟ"],
    ["Customer", "Good quality teak wood.", "ଭଲ କ୍ୱାଲିଟିର ଶାଗୁଆନ କାଠ।", "ଗୁଡ୍ କ୍ୱାଲିଟି ଟିକ୍ ଉଡ୍"],
    ["Carpenter", "Okay, I will bring a sample tomorrow.", "ଠିକ୍ ଅଛି, ମୁଁ କାଲି ଏକ ନମୁନା ଆଣିବି।", "ଓକେ, ଆଇ ୱିଲ୍ ବ୍ରିଙ୍ଗ ଏ ସାମ୍ପଲ୍ ଟୁମରୋ"],
  ]),
  topic("carp-measure", "Taking Measurements", "ମାପ ନେବା", "carpenter", ["Carpenter", "Customer"], [
    ["Carpenter", "Let me take the measurement first.", "ମୋତେ ପ୍ରଥମେ ମାପ ନେବାକୁ ଦିଅ।", "ଲେଟ୍ ମି ଟେକ୍ ଦ ମେଜରମେଣ୍ଟ ଫର୍ଷ୍ଟ"],
    ["Customer", "Sure, go ahead.", "ନିଶ୍ଚୟ, କରନ୍ତୁ।", "ସ୍ୱୋର୍, ଗୋ ଆହେଡ୍"],
    ["Carpenter", "This wall is ten feet wide.", "ଏହି କାନ୍ଥ ଦଶ ଫୁଟ୍ ଚଉଡ଼ା।", "ଦିସ୍ ୱାଲ୍ ଇଜ୍ ଟେନ୍ ଫିଟ୍ ୱାଇଡ୍"],
    ["Customer", "Can you make a cupboard here?", "ଏଠାରେ ଏକ ଆଲମାରୀ କରିପାରିବେ କି?", "କ୍ୟାନ୍ ୟୁ ମେକ୍ ଏ କପ୍‌ବୋର୍ଡ ହିଅର୍"],
    ["Carpenter", "Yes, that is possible.", "ହଁ, ତାହା ସମ୍ଭବ।", "ୟେସ୍, ଦାଟ୍ ଇଜ୍ ପସିବଲ୍"],
    ["Customer", "How many days will it take?", "ଏଥିରେ କେତେ ଦିନ ଲାଗିବ?", "ହାଉ ମେନି ଡେଜ୍ ୱିଲ୍ ଇଟ୍ ଟେକ୍"],
    ["Carpenter", "About one week.", "ପ୍ରାୟ ଏକ ସପ୍ତାହ।", "ଅବାଉଟ୍ ୱାନ୍ ୱିକ୍"],
  ]),
  topic("carp-estimate", "Cost and Materials", "ଖର୍ଚ୍ଚ ଓ ସାମଗ୍ରୀ", "carpenter", ["Carpenter", "Customer"], [
    ["Carpenter", "This work will cost eight thousand rupees.", "ଏହି କାମରେ ଆଠ ହଜାର ଟଙ୍କା ଖର୍ଚ୍ଚ ହେବ।", "ଦିସ୍ ୱର୍କ ୱିଲ୍ କଷ୍ଟ ଏଟ୍ ଥାଉଜେଣ୍ଡ ରୁପିଜ୍"],
    ["Customer", "Is that with the wood included?", "ଏଥିରେ କାଠ ମଧ୍ୟ ଅଛି କି?", "ଇଜ୍ ଦାଟ୍ ୱିଥ୍ ଦ ଉଡ୍ ଇନ୍‌କ୍ଲୁଡେଡ୍"],
    ["Carpenter", "Yes, wood and my labour both.", "ହଁ, କାଠ ଏବଂ ମୋ କାମ ଦୁଇଟିଯାକ।", "ୟେସ୍, ଉଡ୍ ଆଣ୍ଡ ମାଇ ଲେବର୍ ବୋଥ୍"],
    ["Customer", "Can you reduce it a little?", "ଟିକିଏ କମ୍ କରିପାରିବେ କି?", "କ୍ୟାନ୍ ୟୁ ରିଡ୍ୟୁସ୍ ଇଟ୍ ଏ ଲିଟିଲ୍"],
    ["Carpenter", "Okay, seven and a half thousand.", "ଠିକ୍ ଅଛି, ସାଢେ ସାତ ହଜାର।", "ଓକେ, ସେଭେନ୍ ଆଣ୍ଡ ଏ ହାଫ୍ ଥାଉଜେଣ୍ଡ"],
    ["Customer", "Alright, please start the work.", "ଠିକ୍ ଅଛି, ଦୟାକରି କାମ ଆରମ୍ଭ କରନ୍ତୁ।", "ଅଲରାଇଟ୍, ପ୍ଲିଜ୍ ଷ୍ଟାର୍ଟ ଦ ୱର୍କ"],
  ]),
  topic("carp-supplier", "Buying Wood and Tools", "କାଠ ଓ ଉପକରଣ କିଣିବା", "carpenter", ["Carpenter", "Shopkeeper"], [
    ["Carpenter", "I need four planks of teak wood.", "ମୋତେ ଚାରୋଟି ଶାଗୁଆନ କାଠର ପଟା ଦରକାର।", "ଆଇ ନିଡ୍ ଫୋର୍ ପ୍ଲାଙ୍କ୍ସ ଅଫ୍ ଟିକ୍ ଉଡ୍"],
    ["Shopkeeper", "What length do you want?", "ଆପଣ କେତେ ଲମ୍ବ ଚାହାଁନ୍ତି?", "ୱଟ୍ ଲେଙ୍ଗ୍ଥ ଡୁ ୟୁ ୱାଣ୍ଟ"],
    ["Carpenter", "Six feet each.", "ପ୍ରତ୍ୟେକଟି ଛଅ ଫୁଟ୍।", "ସିକ୍ସ ଫିଟ୍ ଇଚ୍"],
    ["Shopkeeper", "Do you need nails and glue also?", "ଆପଣଙ୍କୁ କଣ୍ଟା ଓ ଗୁଣ୍ଡ ମଧ୍ୟ ଦରକାର କି?", "ଡୁ ୟୁ ନିଡ୍ ନେଲ୍ସ ଆଣ୍ଡ ଗ୍ଲୁ ଅଲସୋ"],
    ["Carpenter", "Yes, give me both.", "ହଁ, ମୋତେ ଦୁଇଟିଯାକ ଦିଅନ୍ତୁ।", "ୟେସ୍, ଗିଭ୍ ମି ବୋଥ୍"],
    ["Shopkeeper", "Total is two thousand rupees.", "ମୋଟ ଦୁଇ ହଜାର ଟଙ୍କା।", "ଟୋଟାଲ୍ ଇଜ୍ ଟୁ ଥାଉଜେଣ୍ଡ ରୁପିଜ୍"],
  ]),

  // ---------- Mason ----------
  topic("mason-newjob", "Discussing Construction Work", "ନିର୍ମାଣ କାମ ବିଷୟରେ କଥାବାର୍ତ୍ତା", "mason", ["Customer", "Mason"], [
    ["Customer", "I want to build a boundary wall.", "ମୁଁ ଏକ ସୀମା କାନ୍ଥ ତିଆରି କରିବାକୁ ଚାହେଁ।", "ଆଇ ୱାଣ୍ଟ ଟୁ ବିଲ୍ଡ ଏ ବାଉଣ୍ଡ୍ରି ୱାଲ୍"],
    ["Mason", "How long and how high?", "କେତେ ଲମ୍ବ ଓ କେତେ ଉଚ୍ଚ?", "ହାଉ ଲଙ୍ଗ ଆଣ୍ଡ ହାଉ ହାଇ"],
    ["Customer", "Fifty feet long and six feet high.", "ପଚାଶ ଫୁଟ୍ ଲମ୍ବ ଏବଂ ଛଅ ଫୁଟ୍ ଉଚ୍ଚ।", "ଫିଫ୍‌ଟି ଫିଟ୍ ଲଙ୍ଗ ଆଣ୍ଡ ସିକ୍ସ ଫିଟ୍ ହାଇ"],
    ["Mason", "I will need bricks, cement, and sand.", "ମୋତେ ଇଟା, ସିମେଣ୍ଟ ଏବଂ ବାଲି ଦରକାର ହେବ।", "ଆଇ ୱିଲ୍ ନିଡ୍ ବ୍ରିକ୍ସ, ସିମେଣ୍ଟ, ଆଣ୍ଡ ସ୍ୟାଣ୍ଡ"],
    ["Customer", "When can you start?", "କେବେ ଆରମ୍ଭ କରିପାରିବେ?", "ୱେନ୍ କେନ୍ ୟୁ ଷ୍ଟାର୍ଟ"],
    ["Mason", "I can start from Monday.", "ମୁଁ ସୋମବାରଠାରୁ ଆରମ୍ଭ କରିପାରିବି।", "ଆଇ କେନ୍ ଷ୍ଟାର୍ଟ ଫ୍ରମ୍ ମଣ୍ଡେ"],
  ]),
  topic("mason-materials", "Estimating Materials", "ସାମଗ୍ରୀର ହିସାବ", "mason", ["Mason", "Customer"], [
    ["Mason", "We will need two thousand bricks.", "ଆମକୁ ଦୁଇ ହଜାର ଇଟା ଦରକାର ହେବ।", "ୱି ୱିଲ୍ ନିଡ୍ ଟୁ ଥାଉଜେଣ୍ଡ ବ୍ରିକ୍ସ"],
    ["Customer", "How many bags of cement?", "କେତେ ବ୍ୟାଗ୍ ସିମେଣ୍ଟ ଦରକାର?", "ହାଉ ମେନି ବ୍ୟାଗ୍ସ ଅଫ୍ ସିମେଣ୍ଟ"],
    ["Mason", "About twenty bags.", "ପ୍ରାୟ କୋଡ଼ିଏ ବ୍ୟାଗ୍।", "ଅବାଉଟ୍ ଟ୍ୱେଣ୍ଟି ବ୍ୟାଗ୍ସ"],
    ["Customer", "Should I order the sand also?", "ମୁଁ ବାଲି ମଧ୍ୟ ମାଗିବି କି?", "ସୁଡ୍ ଆଇ ଅର୍ଡର୍ ଦ ସ୍ୟାଣ୍ଡ ଅଲସୋ"],
    ["Mason", "Yes, order one truck of sand.", "ହଁ, ଏକ ଟ୍ରକ୍ ବାଲି ମାଗନ୍ତୁ।", "ୟେସ୍, ଅର୍ଡର୍ ୱାନ୍ ଟ୍ରକ୍ ଅଫ୍ ସ୍ୟାଣ୍ଡ"],
    ["Customer", "Okay, I will order today.", "ଠିକ୍ ଅଛି, ମୁଁ ଆଜି ମାଗିବି।", "ଓକେ, ଆଇ ୱିଲ୍ ଅର୍ଡର୍ ଟୁଡେ"],
  ]),
  topic("mason-safety", "Safety on the Construction Site", "ନିର୍ମାଣ ସ୍ଥଳରେ ସୁରକ୍ଷା", "mason", ["Mason", "Helper"], [
    ["Mason", "Wear your helmet before climbing up.", "ଉପରକୁ ଚଢ଼ିବା ପୂର୍ବରୁ ହେଲମେଟ୍ ପିନ୍ଧ।", "ୱେୟାର୍ ୟୁଅର୍ ହେଲ୍‌ମେଟ୍ ବିଫୋର୍ କ୍ଲାଇମ୍ବିଙ୍ଗ ଅପ୍"],
    ["Helper", "Okay, I am wearing it.", "ଠିକ୍ ଅଛି, ମୁଁ ପିନ୍ଧିଛି।", "ଓକେ, ଆଇ ଆମ୍ ୱେରିଙ୍ଗ ଇଟ୍"],
    ["Mason", "Check the ladder before you use it.", "ବ୍ୟବହାର କରିବା ପୂର୍ବରୁ ସିଡ଼ି ଯାଞ୍ଚ କର।", "ଚେକ୍ ଦ ଲାଡର୍ ବିଫୋର୍ ୟୁ ୟୁଜ୍ ଇଟ୍"],
    ["Helper", "It looks strong and safe.", "ଏହା ମଜବୁତ ଓ ସୁରକ୍ଷିତ ଦିଶୁଛି।", "ଇଟ୍ ଲୁକ୍ସ ଷ୍ଟ୍ରଙ୍ଗ ଆଣ୍ଡ ସେଫ୍"],
    ["Mason", "Good. Do not stand under the crane.", "ବହୁତ ଭଲ। କ୍ରେନ୍ ତଳେ ଠିଆ ହୁଅ ନାହିଁ।", "ଗୁଡ୍। ଡୁ ନଟ୍ ଷ୍ଟାଣ୍ଡ ଅଣ୍ଡର୍ ଦ କ୍ରେନ୍"],
    ["Helper", "I will keep a distance.", "ମୁଁ ଦୂରତା ରଖିବି।", "ଆଇ ୱିଲ୍ କିପ୍ ଏ ଡିଷ୍ଟାନ୍ସ"],
  ]),
  topic("mason-supplier", "Ordering from a Building Materials Shop", "ନିର୍ମାଣ ସାମଗ୍ରୀ ଦୋକାନରୁ ମାଗିବା", "mason", ["Mason", "Shopkeeper"], [
    ["Mason", "I need five hundred bricks delivered.", "ମୋତେ ପାଞ୍ଚ ଶହ ଇଟା ପହଞ୍ଚାଇବାକୁ ଦରକାର।", "ଆଇ ନିଡ୍ ଫାଇଭ୍ ହଣ୍ଡ୍ରେଡ୍ ବ୍ରିକ୍ସ ଡେଲିଭର୍ଡ"],
    ["Shopkeeper", "When do you need them?", "ଆପଣଙ୍କୁ କେବେ ଦରକାର?", "ୱେନ୍ ଡୁ ୟୁ ନିଡ୍ ଦେମ୍"],
    ["Mason", "Tomorrow morning, please.", "ଦୟାକରି କାଲି ସକାଳେ।", "ଟୁମରୋ ମର୍ନିଙ୍ଗ, ପ୍ଲିଜ୍"],
    ["Shopkeeper", "Okay, I will send a truck.", "ଠିକ୍ ଅଛି, ମୁଁ ଏକ ଟ୍ରକ୍ ପଠାଇବି।", "ଓକେ, ଆଇ ୱିଲ୍ ସେଣ୍ଡ ଏ ଟ୍ରକ୍"],
    ["Mason", "Also add ten bags of cement.", "ଦଶ ବ୍ୟାଗ୍ ସିମେଣ୍ଟ ମଧ୍ୟ ଯୋଡ଼ନ୍ତୁ।", "ଅଲସୋ ଆଡ୍ ଟେନ୍ ବ୍ୟାଗ୍ସ ଅଫ୍ ସିମେଣ୍ଟ"],
    ["Shopkeeper", "Sure, I will note it down.", "ନିଶ୍ଚୟ, ମୁଁ ଲେଖିରଖିବି।", "ସ୍ୱୋର୍, ଆଇ ୱିଲ୍ ନୋଟ୍ ଇଟ୍ ଡାଉନ୍"],
  ]),

  // ---------- Mechanic ----------
  topic("mech-newjob", "Customer Brings a Vehicle", "ଗ୍ରାହକ ଗାଡ଼ି ଆଣିବା", "mechanic", ["Customer", "Mechanic"], [
    ["Customer", "My bike is not starting.", "ମୋ ବାଇକ୍ ଷ୍ଟାର୍ଟ ହେଉନାହିଁ।", "ମାଇ ବାଇକ୍ ଇଜ୍ ନଟ୍ ଷ୍ଟାର୍ଟିଙ୍ଗ"],
    ["Mechanic", "Let me check the engine.", "ମୋତେ ଇଞ୍ଜିନ୍ ଯାଞ୍ଚ କରିବାକୁ ଦିଅ।", "ଲେଟ୍ ମି ଚେକ୍ ଦ ଏଞ୍ଜିନ୍"],
    ["Customer", "It made a strange noise yesterday.", "ଗତକାଲି ଏଥିରୁ ଅଜବ ଶବ୍ଦ ହେଲା।", "ଇଟ୍ ମେଡ୍ ଏ ଷ୍ଟ୍ରେଞ୍ଜ ନଏଜ୍ ୟେଷ୍ଟର୍ଡେ"],
    ["Mechanic", "The battery seems weak.", "ବ୍ୟାଟେରୀ ଦୁର୍ବଳ ଦିଶୁଛି।", "ଦ ବ୍ୟାଟେରି ସିମ୍ସ ୱିକ୍"],
    ["Customer", "Can you fix it today?", "ଆଜି ଠିକ୍ କରିପାରିବେ କି?", "କ୍ୟାନ୍ ୟୁ ଫିକ୍ସ ଇଟ୍ ଟୁଡେ"],
    ["Mechanic", "Yes, give me one hour.", "ହଁ, ମୋତେ ଏକ ଘଣ୍ଟା ସମୟ ଦିଅନ୍ତୁ।", "ୟେସ୍, ଗିଭ୍ ମି ୱାନ୍ ଆୱାର୍"],
  ]),
  topic("mech-diagnose", "Diagnosing an Engine Problem", "ଇଞ୍ଜିନ୍ ସମସ୍ୟା ଚିହ୍ନଟ କରିବା", "mechanic", ["Mechanic", "Customer"], [
    ["Mechanic", "The engine oil is very dirty.", "ଇଞ୍ଜିନ ତେଲ ବହୁତ ମଇଳା ହୋଇଛି।", "ଦ ଏଞ୍ଜିନ୍ ଅଏଲ୍ ଇଜ୍ ଭେରି ଡର୍ଟି"],
    ["Customer", "When was it last changed?", "ଶେଷରେ କେବେ ବଦଳାଯାଇଥିଲା?", "ୱେନ୍ ୱାଜ୍ ଇଟ୍ ଲାଷ୍ଟ ଚେଞ୍ଜଡ୍"],
    ["Mechanic", "It looks like it was never changed.", "ଏହା କେବେ ବଦଳାଯାଇ ନଥିବା ପରି ଦିଶୁଛି।", "ଇଟ୍ ଲୁକ୍ସ ଲାଇକ୍ ଇଟ୍ ୱାଜ୍ ନେଭର୍ ଚେଞ୍ଜଡ୍"],
    ["Customer", "Please change it now.", "ଦୟାକରି ବର୍ତ୍ତମାନ ବଦଳାଇଦିଅ।", "ପ୍ଲିଜ୍ ଚେଞ୍ଜ ଇଟ୍ ନାଉ"],
    ["Mechanic", "Also, the brake pads are worn out.", "ଏଥିସହିତ, ବ୍ରେକ୍ ପ୍ୟାଡ୍ ମଧ୍ୟ ନଷ୍ଟ ହୋଇଯାଇଛି।", "ଅଲସୋ, ଦ ବ୍ରେକ୍ ପ୍ୟାଡ୍ସ ଆର୍ ୱର୍ନ୍ ଆଉଟ୍"],
    ["Customer", "Please change those too.", "ଦୟାକରି ସେଗୁଡ଼ିକ ମଧ୍ୟ ବଦଳାନ୍ତୁ।", "ପ୍ଲିଜ୍ ଚେଞ୍ଜ ଦୋଜ୍ ଟୁ"],
  ]),
  topic("mech-estimate", "Repair Cost", "ମରାମତି ଖର୍ଚ୍ଚ", "mechanic", ["Mechanic", "Customer"], [
    ["Mechanic", "The total repair will cost twelve hundred rupees.", "ମୋଟ ମରାମତିରେ ବାର ଶହ ଟଙ୍କା ଖର୍ଚ୍ଚ ହେବ।", "ଦ ଟୋଟାଲ୍ ରିପେୟାର୍ ୱିଲ୍ କଷ୍ଟ ଟ୍ୱେଲ୍ଭ ହଣ୍ଡ୍ରେଡ୍ ରୁପିଜ୍"],
    ["Customer", "That is a bit high.", "ତାହା ଟିକିଏ ଅଧିକ।", "ଦାଟ୍ ଇଜ୍ ଏ ବିଟ୍ ହାଇ"],
    ["Mechanic", "The parts are genuine and costly.", "ପାର୍ଟ୍ସଗୁଡ଼ିକ ଆସଲି ଏବଂ ମହଙ୍ଗା।", "ଦ ପାର୍ଟ୍ସ ଆର୍ ଜେନୁଇନ୍ ଆଣ୍ଡ କଷ୍ଟଲି"],
    ["Customer", "Okay, please go ahead.", "ଠିକ୍ ଅଛି, ଦୟାକରି କରନ୍ତୁ।", "ଓକେ, ପ୍ଲିଜ୍ ଗୋ ଆହେଡ୍"],
    ["Mechanic", "It will be ready by evening.", "ଏହା ସନ୍ଧ୍ୟା ସୁଦ୍ଧା ପ୍ରସ୍ତୁତ ହେବ।", "ଇଟ୍ ୱିଲ୍ ବି ରେଡି ବାଇ ଇଭନିଙ୍ଗ"],
    ["Customer", "Thank you. I will come by six.", "ଧନ୍ୟବାଦ। ମୁଁ ଛଅଟା ସୁଦ୍ଧା ଆସିବି।", "ଥାଙ୍କ ୟୁ। ଆଇ ୱିଲ୍ କମ୍ ବାଇ ସିକ୍ସ"],
  ]),
  topic("mech-supplier", "Ordering Spare Parts", "ସ୍ପେୟାର୍ ପାର୍ଟସ୍ ମାଗିବା", "mechanic", ["Mechanic", "Shopkeeper"], [
    ["Mechanic", "I need a battery for this bike model.", "ମୋତେ ଏହି ବାଇକ୍ ମଡେଲ୍ ପାଇଁ ଏକ ବ୍ୟାଟେରୀ ଦରକାର।", "ଆଇ ନିଡ୍ ଏ ବ୍ୟାଟେରି ଫର୍ ଦିସ୍ ବାଇକ୍ ମଡେଲ୍"],
    ["Shopkeeper", "We have it in stock.", "ଆମ ପାଖରେ ଏହା ଷ୍ଟକ୍‌ରେ ଅଛି।", "ୱି ହେଭ୍ ଇଟ୍ ଇନ୍ ଷ୍ଟକ୍"],
    ["Mechanic", "Give me brake pads also.", "ମୋତେ ବ୍ରେକ୍ ପ୍ୟାଡ୍ ମଧ୍ୟ ଦିଅନ୍ତୁ।", "ଗିଭ୍ ମି ବ୍ରେକ୍ ପ୍ୟାଡ୍ସ ଅଲସୋ"],
    ["Shopkeeper", "Original or local ones?", "ମୂଳ ନା ଲୋକାଲ୍?", "ଓରିଜିନାଲ୍ ଅର୍ ଲୋକାଲ୍ ୱାନ୍ସ"],
    ["Mechanic", "Original ones, please.", "ଦୟାକରି ମୂଳ ଟି।", "ଓରିଜିନାଲ୍ ୱାନ୍ସ, ପ୍ଲିଜ୍"],
    ["Shopkeeper", "Total is nine hundred rupees.", "ମୋଟ ନଅ ଶହ ଟଙ୍କା।", "ଟୋଟାଲ୍ ଇଜ୍ ନାଇନ୍ ହଣ୍ଡ୍ରେଡ୍ ରୁପିଜ୍"],
  ]),

  // ---------- Job & workplace ----------
  topic("work-interview", "Job Interview", "ଚାକିରି ସାକ୍ଷାତକାର", "workplace", ["Interviewer", "You"], [
    ["Interviewer", "Tell me about yourself.", "ନିଜ ବିଷୟରେ କୁହନ୍ତୁ।", "ଟେଲ୍ ମି ଅବାଉଟ୍ ୟୁଅରସେଲ୍ଫ"],
    ["You", "I have three years of experience as an electrician.", "ମୋର ବିଜୁଳି ମିସ୍ତ୍ରୀ ଭାବେ ତିନି ବର୍ଷର ଅଭିଜ୍ଞତା ଅଛି।", "ଆଇ ହେଭ୍ ଥ୍ରି ଇୟର୍ସ ଅଫ୍ ଏକ୍ସପେରିଏନ୍ସ ଆଜ୍ ଆନ୍ ଇଲେକ୍ଟ୍ରିସିଆନ୍"],
    ["Interviewer", "Why do you want this job?", "ଆପଣ ଏହି ଚାକିରି କାହିଁକି ଚାହୁଁଛନ୍ତି?", "ୱାଇ ଡୁ ୟୁ ୱାଣ୍ଟ ଦିସ୍ ଜବ୍"],
    ["You", "I want to learn new skills and grow.", "ମୁଁ ନୂଆ କୌଶଳ ଶିଖି ଉନ୍ନତି କରିବାକୁ ଚାହେଁ।", "ଆଇ ୱାଣ୍ଟ ଟୁ ଲର୍ନ୍ ନ୍ୟୁ ସ୍କିଲ୍ସ ଆଣ୍ଡ ଗ୍ରୋ"],
    ["Interviewer", "When can you join?", "ଆପଣ କେବେ ଯୋଗ ଦେଇପାରିବେ?", "ୱେନ୍ କେନ୍ ୟୁ ଜଏନ୍"],
    ["You", "I can join from next Monday.", "ମୁଁ ଆସନ୍ତା ସୋମବାରଠାରୁ ଯୋଗ ଦେଇପାରିବି।", "ଆଇ କେନ୍ ଜଏନ୍ ଫ୍ରମ୍ ନେକ୍ସ୍ଟ ମଣ୍ଡେ"],
  ]),
  topic("work-leave", "Asking for Leave", "ଛୁଟି ମାଗିବା", "workplace", ["You", "Supervisor"], [
    ["You", "Sir, I need one day's leave tomorrow.", "ମହାଶୟ, ମୋତେ କାଲି ଗୋଟିଏ ଦିନର ଛୁଟି ଦରକାର।", "ସାର୍, ଆଇ ନିଡ୍ ୱାନ୍ ଡେଜ୍ ଲିଭ୍ ଟୁମରୋ"],
    ["Supervisor", "Why do you need leave?", "ଆପଣଙ୍କୁ କାହିଁକି ଛୁଟି ଦରକାର?", "ୱାଇ ଡୁ ୟୁ ନିଡ୍ ଲିଭ୍"],
    ["You", "I have to visit the doctor.", "ମୋତେ ଡାକ୍ତରଙ୍କ ପାଖକୁ ଯିବାକୁ ପଡ଼ିବ।", "ଆଇ ହେଭ୍ ଟୁ ଭିଜିଟ୍ ଦ ଡକ୍ଟର"],
    ["Supervisor", "Okay, take care of your health.", "ଠିକ୍ ଅଛି, ନିଜ ସ୍ୱାସ୍ଥ୍ୟର ଯତ୍ନ ନିଅନ୍ତୁ।", "ଓକେ, ଟେକ୍ କେୟାର୍ ଅଫ୍ ୟୁଅର୍ ହେଲ୍ଥ"],
    ["You", "Thank you, sir. I will come the day after.", "ଧନ୍ୟବାଦ, ମହାଶୟ। ମୁଁ ପରଦିନ ଆସିବି।", "ଥାଙ୍କ ୟୁ, ସାର୍। ଆଇ ୱିଲ୍ କମ୍ ଦ ଡେ ଆଫ୍ଟର୍"],
    ["Supervisor", "No problem. Get well soon.", "କୌଣସି ଅସୁବିଧା ନାହିଁ। ଶୀଘ୍ର ସୁସ୍ଥ ହୁଅନ୍ତୁ।", "ନୋ ପ୍ରବ୍ଲେମ୍। ଗେଟ୍ ୱେଲ୍ ସୁନ୍"],
  ]),
  topic("work-salary", "Discussing Salary", "ଦରମାର ଆଲୋଚନା", "workplace", ["You", "Employer"], [
    ["You", "Sir, what will be my monthly salary?", "ମହାଶୟ, ମୋର ମାସିକ ଦରମା କେତେ ହେବ?", "ସାର୍, ୱଟ୍ ୱିଲ୍ ବି ମାଇ ମନ୍ଥ୍‌ଲି ସାଲାରି"],
    ["Employer", "It will be twelve thousand rupees.", "ଏହା ବାର ହଜାର ଟଙ୍କା ହେବ।", "ଇଟ୍ ୱିଲ୍ ବି ଟ୍ୱେଲ୍ଭ ଥାଉଜେଣ୍ଡ ରୁପିଜ୍"],
    ["You", "When will I get paid?", "ମୁଁ କେବେ ଦରମା ପାଇବି?", "ୱେନ୍ ୱିଲ୍ ଆଇ ଗେଟ୍ ପେଡ୍"],
    ["Employer", "On the first of every month.", "ପ୍ରତି ମାସର ପ୍ରଥମ ତାରିଖରେ।", "ଅନ୍ ଦ ଫର୍ଷ୍ଟ ଅଫ୍ ଏଭ୍ରି ମନ୍ଥ"],
    ["You", "Is there any bonus?", "କୌଣସି ବୋନସ୍ ଅଛି କି?", "ଇଜ୍ ଦେର୍ ଏନି ବୋନସ୍"],
    ["Employer", "Yes, during festivals.", "ହଁ, ପର୍ବ ସମୟରେ।", "ୟେସ୍, ଡ୍ୟୁରିଙ୍ଗ ଫେଷ୍ଟିଭାଲ୍ସ"],
  ]),
  topic("work-firstday", "First Day at Work", "କାମର ପ୍ରଥମ ଦିନ", "workplace", ["Colleague", "You"], [
    ["Colleague", "Welcome! Are you the new worker?", "ସ୍ୱାଗତ! ଆପଣ ନୂଆ କର୍ମଚାରୀ କି?", "ୱେଲକମ୍! ଆର୍ ୟୁ ଦ ନ୍ୟୁ ୱର୍କର୍"],
    ["You", "Yes, this is my first day.", "ହଁ, ଏହା ମୋର ପ୍ରଥମ ଦିନ।", "ୟେସ୍, ଦିସ୍ ଇଜ୍ ମାଇ ଫର୍ଷ୍ଟ ଡେ"],
    ["Colleague", "Let me show you around.", "ମୁଁ ତୁମକୁ ସବୁକିଛି ଦେଖାଉଛି।", "ଲେଟ୍ ମି ସୋ ୟୁ ଅରାଉଣ୍ଡ"],
    ["You", "Thank you, that will help a lot.", "ଧନ୍ୟବାଦ, ଏହା ବହୁତ ସାହାଯ୍ୟ କରିବ।", "ଥାଙ୍କ ୟୁ, ଦାଟ୍ ୱିଲ୍ ହେଲ୍ପ ଏ ଲଟ୍"],
    ["Colleague", "If you have any doubt, just ask me.", "ଯଦି କୌଣସି ସନ୍ଦେହ ଥାଏ, ମୋତେ ପଚାର।", "ଇଫ୍ ୟୁ ହେଭ୍ ଏନି ଡାଉଟ୍, ଜଷ୍ଟ ଆସ୍କ ମି"],
    ["You", "Sure, thank you for your help.", "ନିଶ୍ଚୟ, ସାହାଯ୍ୟ ପାଇଁ ଧନ୍ୟବାଦ।", "ସ୍ୱୋର୍, ଥାଙ୍କ ୟୁ ଫର୍ ୟୁଅର୍ ହେଲ୍ପ"],
  ]),

  // ---------- Travel & transport ----------
  topic("travel-auto", "Bargaining an Auto Fare", "ଅଟୋ ଭଡ଼ା ବୁଝାମଣା", "travel", ["You", "Driver"], [
    ["You", "How much to the railway station?", "ରେଳ ଷ୍ଟେସନ୍ ଯିବାକୁ କେତେ ଲାଗିବ?", "ହାଉ ମଚ୍ ଟୁ ଦ ରେଲ୍‌ୱେ ଷ୍ଟେସନ୍"],
    ["Driver", "One hundred rupees.", "ଏକ ଶହ ଟଙ୍କା।", "ୱାନ୍ ହଣ୍ଡ୍ରେଡ୍ ରୁପିଜ୍"],
    ["You", "That is too much. Eighty rupees?", "ତାହା ବହୁତ ଅଧିକ। ଅଶୀ ଟଙ୍କା?", "ଦାଟ୍ ଇଜ୍ ଟୁ ମଚ୍। ଏଟି ରୁପିଜ୍"],
    ["Driver", "Okay, ninety rupees, final.", "ଠିକ୍ ଅଛି, ନବେ ଟଙ୍କା, ଅନ୍ତିମ।", "ଓକେ, ନାଇଣ୍ଟି ରୁପିଜ୍, ଫାଇନାଲ୍"],
    ["You", "Alright, let's go.", "ଠିକ୍ ଅଛି, ଚାଲ।", "ଅଲରାଇଟ୍, ଲେଟ୍ସ ଗୋ"],
    ["Driver", "Please sit, I am starting.", "ଦୟାକରି ବସନ୍ତୁ, ମୁଁ ଆରମ୍ଭ କରୁଛି।", "ପ୍ଲିଜ୍ ସିଟ୍, ଆଇ ଆମ୍ ଷ୍ଟାର୍ଟିଙ୍ଗ"],
  ]),
  topic("travel-station", "At the Railway Station", "ରେଳ ଷ୍ଟେସନରେ", "travel", ["You", "Clerk"], [
    ["You", "One ticket to Bhubaneswar, please.", "ଦୟାକରି ଭୁବନେଶ୍ୱର ପାଇଁ ଗୋଟିଏ ଟିକେଟ୍।", "ୱାନ୍ ଟିକେଟ୍ ଟୁ ଭୁବନେଶ୍ୱର, ପ୍ଲିଜ୍"],
    ["Clerk", "General or sleeper?", "ଜେନେରାଲ୍ ନା ସ୍ଲିପର୍?", "ଜେନେରାଲ୍ ଅର୍ ସ୍ଲିପର୍"],
    ["You", "Sleeper class, please.", "ଦୟାକରି ସ୍ଲିପର୍ କ୍ଲାସ୍।", "ସ୍ଲିପର୍ କ୍ଲାସ୍, ପ୍ଲିଜ୍"],
    ["Clerk", "That will be two hundred rupees.", "ଏଥିରେ ଦୁଇ ଶହ ଟଙ୍କା ଲାଗିବ।", "ଦାଟ୍ ୱିଲ୍ ବି ଟୁ ହଣ୍ଡ୍ରେଡ୍ ରୁପିଜ୍"],
    ["You", "Which platform does the train come to?", "ଗାଡ଼ି କେଉଁ ପ୍ଲାଟଫର୍ମରେ ଆସିବ?", "ୱିଚ୍ ପ୍ଲାଟଫର୍ମ ଡଜ୍ ଦ ଟ୍ରେନ୍ କମ୍ ଟୁ"],
    ["Clerk", "Platform number two.", "ପ୍ଲାଟଫର୍ମ ନମ୍ବର ଦୁଇ।", "ପ୍ଲାଟଫର୍ମ ନମ୍ବର୍ ଟୁ"],
  ]),
  topic("travel-airport", "At the Airport Check-in", "ବିମାନବନ୍ଦର ଚେକ୍-ଇନ୍‌ରେ", "travel", ["Staff", "You"], [
    ["Staff", "May I see your ticket and ID, please?", "ମୁଁ ଆପଣଙ୍କ ଟିକେଟ୍ ଓ ପରିଚୟପତ୍ର ଦେଖିପାରିବି କି?", "ମେ ଆଇ ସି ୟୁଅର୍ ଟିକେଟ୍ ଆଣ୍ଡ ଆଇଡି, ପ୍ଲିଜ୍"],
    ["You", "Yes, here they are.", "ହଁ, ଏହି ରହିଲା।", "ୟେସ୍, ହିଅର୍ ଦେ ଆର୍"],
    ["Staff", "Do you have any luggage to check in?", "ଆପଣଙ୍କର ଚେକ୍-ଇନ୍ କରିବାକୁ କୌଣସି ଲଗେଜ୍ ଅଛି କି?", "ଡୁ ୟୁ ହେଭ୍ ଏନି ଲଗେଜ୍ ଟୁ ଚେକ୍ ଇନ୍"],
    ["You", "Yes, one bag.", "ହଁ, ଗୋଟିଏ ବ୍ୟାଗ୍।", "ୟେସ୍, ୱାନ୍ ବ୍ୟାଗ୍"],
    ["Staff", "Your boarding gate is number five.", "ଆପଣଙ୍କ ବୋର୍ଡିଂ ଗେଟ୍ ନମ୍ବର ପାଞ୍ଚ।", "ୟୁଅର୍ ବୋର୍ଡିଙ୍ଗ ଗେଟ୍ ଇଜ୍ ନମ୍ବର୍ ଫାଇଭ୍"],
    ["You", "Thank you for your help.", "ସାହାଯ୍ୟ ପାଇଁ ଧନ୍ୟବାଦ।", "ଥାଙ୍କ ୟୁ ଫର୍ ୟୁଅର୍ ହେଲ୍ପ"],
  ]),
  topic("travel-bus", "Asking about Bus Timing", "ବସ୍ ସମୟ ପଚାରିବା", "travel", ["You", "Conductor"], [
    ["You", "When is the next bus to Puri?", "ପୁରୀ ପାଇଁ ପରବର୍ତ୍ତୀ ବସ୍ କେବେ ଅଛି?", "ୱେନ୍ ଇଜ୍ ଦ ନେକ୍ସ୍ଟ ବସ୍ ଟୁ ପୁରୀ"],
    ["Conductor", "It leaves in twenty minutes.", "ଏହା କୋଡ଼ିଏ ମିନିଟରେ ଛାଡ଼ିବ।", "ଇଟ୍ ଲିଭ୍ସ ଇନ୍ ଟ୍ୱେଣ୍ଟି ମିନିଟ୍ସ"],
    ["You", "How much is the fare?", "ଭଡ଼ା କେତେ?", "ହାଉ ମଚ୍ ଇଜ୍ ଦ ଫେୟାର୍"],
    ["Conductor", "Sixty rupees per person.", "ପ୍ରତି ବ୍ୟକ୍ତି ଷାଠିଏ ଟଙ୍କା।", "ସିକ୍ସ୍‌ଟି ରୁପିଜ୍ ପର୍ ପର୍ସନ୍"],
    ["You", "Which platform is it at?", "ଏହା କେଉଁ ପ୍ଲାଟଫର୍ମରେ ଅଛି?", "ୱିଚ୍ ପ୍ଲାଟଫର୍ମ ଇଜ୍ ଇଟ୍ ଆଟ୍"],
    ["Conductor", "Platform three, on the right.", "ଡାହାଣ ପାଖରେ, ପ୍ଲାଟଫର୍ମ ତିନି।", "ପ୍ଲାଟଫର୍ମ ଥ୍ରି, ଅନ୍ ଦ ରାଇଟ୍"],
  ]),

  // ---------- Emergencies ----------
  topic("emer-call", "Calling for Help", "ସାହାଯ୍ୟ ପାଇଁ ଫୋନ୍ କରିବା", "emergency", ["You", "Operator"], [
    ["You", "Help! There has been an accident.", "ସାହାଯ୍ୟ! ଏକ ଦୁର୍ଘଟଣା ଘଟିଛି।", "ହେଲ୍ପ! ଦେର୍ ହ୍ୟାଜ୍ ବିନ୍ ଆନ୍ ଆକ୍ସିଡେଣ୍ଟ"],
    ["Operator", "What is your location?", "ଆପଣଙ୍କ ଅବସ୍ଥାନ କଣ?", "ୱଟ୍ ଇଜ୍ ୟୁଅର୍ ଲୋକେସନ୍"],
    ["You", "Near the main market, on the highway.", "ମୁଖ୍ୟ ବଜାର ପାଖରେ, ହାଇୱେ ଉପରେ।", "ନିଅର୍ ଦ ମେନ୍ ମାର୍କେଟ୍, ଅନ୍ ଦ ହାଇୱେ"],
    ["Operator", "Is anyone injured?", "କେହି ଆହତ ହୋଇଛନ୍ତି କି?", "ଇଜ୍ ଏନିୱାନ୍ ଇନ୍‌ଜୁର୍ଡ"],
    ["You", "Yes, one person is badly hurt.", "ହଁ, ଜଣେ ବ୍ୟକ୍ତି ବହୁତ ଆହତ ହୋଇଛନ୍ତି।", "ୟେସ୍, ୱାନ୍ ପର୍ସନ୍ ଇଜ୍ ବ୍ୟାଡ୍‌ଲି ହର୍ଟ"],
    ["Operator", "An ambulance is on its way.", "ଏକ ଆମ୍ବୁଲାନ୍ସ ଆସୁଛି।", "ଆନ୍ ଆମ୍ବୁଲାନ୍ସ ଇଜ୍ ଅନ୍ ଇଟ୍ସ ୱେ"],
  ]),
  topic("emer-injury", "Describing an Injury", "ଆଘାତ ବର୍ଣ୍ଣନା କରିବା", "emergency", ["Doctor", "Patient"], [
    ["Doctor", "What happened to your hand?", "ଆପଣଙ୍କ ହାତକୁ କଣ ହେଲା?", "ୱଟ୍ ହାପେନ୍ଡ ଟୁ ୟୁଅର୍ ହ୍ୟାଣ୍ଡ"],
    ["Patient", "I got an electric shock at work.", "କାମ ସମୟରେ ମୋତେ ବିଜୁଳି ଝଟକା ଲାଗିଲା।", "ଆଇ ଗଟ୍ ଆନ୍ ଇଲେକ୍ଟ୍ରିକ୍ ସକ୍ ଆଟ୍ ୱର୍କ"],
    ["Doctor", "Does it hurt a lot?", "ଏହା ବହୁତ ଯନ୍ତ୍ରଣା ଦେଉଛି କି?", "ଡଜ୍ ଇଟ୍ ହର୍ଟ ଏ ଲଟ୍"],
    ["Patient", "Yes, my fingers are burning.", "ହଁ, ମୋ ଆଙ୍ଗୁଠି ଜଳୁଛି।", "ୟେସ୍, ମାଇ ଫିଙ୍ଗର୍ସ ଆର୍ ବର୍ନିଙ୍ଗ"],
    ["Doctor", "I will clean and bandage it now.", "ମୁଁ ବର୍ତ୍ତମାନ ଏହାକୁ ସଫା କରି ବାନ୍ଧିଦେବି।", "ଆଇ ୱିଲ୍ କ୍ଲିନ୍ ଆଣ୍ଡ ବ୍ୟାଣ୍ଡେଜ୍ ଇଟ୍ ନାଉ"],
    ["Patient", "Thank you, doctor.", "ଧନ୍ୟବାଦ, ଡାକ୍ତର।", "ଥାଙ୍କ ୟୁ, ଡକ୍ଟର"],
  ]),
  topic("emer-police", "Talking to the Police", "ପୋଲିସ୍ ସହିତ କଥାବାର୍ତ୍ତା", "emergency", ["You", "Police Officer"], [
    ["You", "Sir, my wallet has been stolen.", "ମହାଶୟ, ମୋ ପର୍ସ ଚୋରି ହୋଇଯାଇଛି।", "ସାର୍, ମାଇ ୱାଲେଟ୍ ହ୍ୟାଜ୍ ବିନ୍ ଷ୍ଟୋଲନ୍"],
    ["Police Officer", "When did this happen?", "ଏହା କେବେ ଘଟିଲା?", "ୱେନ୍ ଡିଡ୍ ଦିସ୍ ହାପେନ୍"],
    ["You", "About one hour ago, near the market.", "ପ୍ରାୟ ଏକ ଘଣ୍ଟା ପୂର୍ବେ, ବଜାର ପାଖରେ।", "ଅବାଉଟ୍ ୱାନ୍ ଆୱାର୍ ଆଗୋ, ନିଅର୍ ଦ ମାର୍କେଟ୍"],
    ["Police Officer", "What was in the wallet?", "ପର୍ସ ଭିତରେ କଣ ଥିଲା?", "ୱଟ୍ ୱାଜ୍ ଇନ୍ ଦ ୱାଲେଟ୍"],
    ["You", "My ID card and some cash.", "ମୋ ପରିଚୟପତ୍ର ଓ କିଛି ଟଙ୍କା।", "ମାଇ ଆଇଡି କାର୍ଡ ଆଣ୍ଡ ସମ୍ କ୍ୟାଶ୍"],
    ["Police Officer", "Please give a written complaint.", "ଦୟାକରି ଏକ ଲିଖିତ ଅଭିଯୋଗ ଦିଅନ୍ତୁ।", "ପ୍ଲିଜ୍ ଗିଭ୍ ଏ ରିଟେନ୍ କମ୍ପ୍ଲେଣ୍ଟ"],
  ]),

  // ---------- Daily errands ----------
  topic("err-postoffice", "At the Post Office", "ଡାକଘରରେ", "errands", ["You", "Clerk"], [
    ["You", "I want to send this parcel.", "ମୁଁ ଏହି ପାର୍ସେଲ୍ ପଠାଇବାକୁ ଚାହେଁ।", "ଆଇ ୱାଣ୍ଟ ଟୁ ସେଣ୍ଡ ଦିସ୍ ପାର୍ସେଲ୍"],
    ["Clerk", "Where is it going?", "ଏହା କେଉଁଠାକୁ ଯିବ?", "ୱେୟାର ଇଜ୍ ଇଟ୍ ଗୋଇଙ୍ଗ"],
    ["You", "To Cuttack, please.", "ଦୟାକରି କଟକକୁ।", "ଟୁ କଟକ୍, ପ୍ଲିଜ୍"],
    ["Clerk", "That will cost fifty rupees.", "ଏଥିରେ ପଚାଶ ଟଙ୍କା ଲାଗିବ।", "ଦାଟ୍ ୱିଲ୍ କଷ୍ଟ ଫିଫ୍‌ଟି ରୁପିଜ୍"],
    ["You", "How many days will it take?", "ଏଥିରେ କେତେ ଦିନ ଲାଗିବ?", "ହାଉ ମେନି ଡେଜ୍ ୱିଲ୍ ଇଟ୍ ଟେକ୍"],
    ["Clerk", "Three to four days.", "ତିନି ରୁ ଚାରି ଦିନ।", "ଥ୍ରି ଟୁ ଫୋର୍ ଡେଜ୍"],
  ]),
  topic("err-recharge", "At the Mobile Recharge Shop", "ମୋବାଇଲ୍ ରିଚାର୍ଜ ଦୋକାନରେ", "errands", ["You", "Shopkeeper"], [
    ["You", "Please recharge this number for two hundred rupees.", "ଦୟାକରି ଏହି ନମ୍ବରକୁ ଦୁଇ ଶହ ଟଙ୍କା ରିଚାର୍ଜ କରନ୍ତୁ।", "ପ୍ଲିଜ୍ ରିଚାର୍ଜ ଦିସ୍ ନମ୍ବର୍ ଫର୍ ଟୁ ହଣ୍ଡ୍ରେଡ୍ ରୁପିଜ୍"],
    ["Shopkeeper", "Which plan do you want?", "ଆପଣ କେଉଁ ପ୍ଲାନ୍ ଚାହାଁନ୍ତି?", "ୱିଚ୍ ପ୍ଲାନ୍ ଡୁ ୟୁ ୱାଣ୍ଟ"],
    ["You", "The one with unlimited calls.", "ଅସୀମିତ କଲ୍ ଥିବା ଟି।", "ଦ ୱାନ୍ ୱିଥ୍ ଅନଲିମିଟେଡ୍ କଲ୍ସ"],
    ["Shopkeeper", "Okay, it is done.", "ଠିକ୍ ଅଛି, ହୋଇଗଲା।", "ଓକେ, ଇଟ୍ ଇଜ୍ ଡନ୍"],
    ["You", "How many days is it valid for?", "ଏହା କେତେ ଦିନ ପାଇଁ ମାନ୍ୟ ଅଛି?", "ହାଉ ମେନି ଡେଜ୍ ଇଜ୍ ଇଟ୍ ଭ୍ୟାଲିଡ୍ ଫର୍"],
    ["Shopkeeper", "Twenty-eight days.", "ଅଠାଇଶ ଦିନ।", "ଟ୍ୱେଣ୍ଟି-ଏଟ୍ ଡେଜ୍"],
  ]),
  topic("err-tailor", "At the Tailor", "ଦରଜୀ ପାଖରେ", "errands", ["You", "Tailor"], [
    ["You", "I want a shirt stitched.", "ମୋତେ ଏକ ସାର୍ଟ ସିଲେଇ କରାଇବାକୁ ଅଛି।", "ଆଇ ୱାଣ୍ଟ ଏ ସର୍ଟ ଷ୍ଟିଚ୍ଡ"],
    ["Tailor", "Let me take your measurement.", "ମୋତେ ଆପଣଙ୍କ ମାପ ନେବାକୁ ଦିଅନ୍ତୁ।", "ଲେଟ୍ ମି ଟେକ୍ ୟୁଅର୍ ମେଜରମେଣ୍ଟ"],
    ["You", "When will it be ready?", "ଏହା କେବେ ପ୍ରସ୍ତୁତ ହେବ?", "ୱେନ୍ ୱିଲ୍ ଇଟ୍ ବି ରେଡି"],
    ["Tailor", "It will be ready in three days.", "ଏହା ତିନି ଦିନରେ ପ୍ରସ୍ତୁତ ହେବ।", "ଇଟ୍ ୱିଲ୍ ବି ରେଡି ଇନ୍ ଥ୍ରି ଡେଜ୍"],
    ["You", "How much will it cost?", "ଏଥିରେ କେତେ ଖର୍ଚ୍ଚ ହେବ?", "ହାଉ ମଚ୍ ୱିଲ୍ ଇଟ୍ କଷ୍ଟ"],
    ["Tailor", "Three hundred rupees, stitching only.", "ମାତ୍ର ସିଲେଇ ପାଇଁ ତିନି ଶହ ଟଙ୍କା।", "ଥ୍ରି ହଣ୍ଡ୍ରେଡ୍ ରୁପିଜ୍, ଷ୍ଟିଚିଙ୍ଗ ଓନଲି"],
  ]),
  topic("err-barber", "At the Barber Shop", "ସାଲୁଙ୍କାରଙ୍କ ପାଖରେ", "errands", ["You", "Barber"], [
    ["You", "I want a haircut, please.", "ମୋତେ ଚୁଟି କଟାଇବାକୁ ଅଛି।", "ଆଇ ୱାଣ୍ଟ ଏ ହେୟାର୍‌କଟ୍, ପ୍ଲିଜ୍"],
    ["Barber", "How short do you want it?", "ଆପଣ କେତେ ଛୋଟ ଚାହାଁନ୍ତି?", "ହାଉ ସର୍ଟ ଡୁ ୟୁ ୱାଣ୍ଟ ଇଟ୍"],
    ["You", "Not too short, just trim it.", "ବେଶି ଛୋଟ ନୁହେଁ, ମାତ୍ର ଟ୍ରିମ୍ କରନ୍ତୁ।", "ନଟ୍ ଟୁ ସର୍ଟ, ଜଷ୍ଟ ଟ୍ରିମ୍ ଇଟ୍"],
    ["Barber", "Do you want a shave also?", "ଆପଣ ସେଭ୍ ମଧ୍ୟ ଚାହାଁନ୍ତି କି?", "ଡୁ ୟୁ ୱାଣ୍ଟ ଏ ସେଭ୍ ଅଲସୋ"],
    ["You", "Yes, please.", "ହଁ, ଦୟାକରି।", "ୟେସ୍, ପ୍ଲିଜ୍"],
    ["Barber", "That will be one hundred rupees total.", "ମୋଟ ଏକ ଶହ ଟଙ୍କା ହେବ।", "ଦାଟ୍ ୱିଲ୍ ବି ୱାନ୍ ହଣ୍ଡ୍ରେଡ୍ ରୁପିଜ୍ ଟୋଟାଲ୍"],
  ]),

  // ---------- Advanced ----------
  topic("adv-negotiate", "Negotiating a Price with a Client", "ଗ୍ରାହକଙ୍କ ସହିତ ଦାମ୍ ବୁଝାମଣା", "advanced", ["Client", "You"], [
    ["Client", "Your quotation seems a bit high.", "ଆପଣଙ୍କ କୋଟେସନ୍ ଟିକିଏ ଅଧିକ ଲାଗୁଛି।", "ୟୁଅର୍ କ୍ୱୋଟେସନ୍ ସିମ୍ସ ଏ ବିଟ୍ ହାଇ"],
    ["You", "This price includes quality material and warranty.", "ଏହି ଦାମ୍‌ରେ ଭଲ କ୍ୱାଲିଟିର ସାମଗ୍ରୀ ଓ ଗ୍ୟାରେଣ୍ଟି ଅନ୍ତର୍ଭୁକ୍ତ।", "ଦିସ୍ ପ୍ରାଇସ୍ ଇନ୍‌କ୍ଲୁଡ୍ସ କ୍ୱାଲିଟି ମେଟେରିଆଲ୍ ଆଣ୍ଡ ୱାରେଣ୍ଟି"],
    ["Client", "Can you offer any discount?", "ଆପଣ କିଛି ଛାଡ଼ ଦେଇପାରିବେ କି?", "କ୍ୟାନ୍ ୟୁ ଅଫର୍ ଏନି ଡିସ୍କାଉଣ୍ଟ"],
    ["You", "I can reduce it by five percent.", "ମୁଁ ପାଞ୍ଚ ପ୍ରତିଶତ କମ୍ କରିପାରିବି।", "ଆଇ କେନ୍ ରିଡ୍ୟୁସ୍ ଇଟ୍ ବାଇ ଫାଇଭ୍ ପର୍ସେଣ୍ଟ"],
    ["Client", "That sounds fair. Let's proceed.", "ତାହା ଉଚିତ ଲାଗୁଛି। ଚାଲନ୍ତୁ ଆଗକୁ ବଢ଼ିବା।", "ଦାଟ୍ ସାଉଣ୍ଡସ୍ ଫେୟାର୍। ଲେଟ୍ସ ପ୍ରୋସିଡ୍"],
    ["You", "Thank you. I will send the agreement today.", "ଧନ୍ୟବାଦ। ମୁଁ ଆଜି ଚୁକ୍ତି ପଠାଇବି।", "ଥାଙ୍କ ୟୁ। ଆଇ ୱିଲ୍ ସେଣ୍ଡ ଦ ଆଗ୍ରିମେଣ୍ଟ ଟୁଡେ"],
  ]),
  topic("adv-complaint", "Handling a Customer Complaint", "ଗ୍ରାହକଙ୍କ ଅଭିଯୋଗ ସମାଧାନ", "advanced", ["Customer", "You"], [
    ["Customer", "I am not satisfied with the work done.", "ମୁଁ କରାଯାଇଥିବା କାମରେ ସନ୍ତୁଷ୍ଟ ନୁହେଁ।", "ଆଇ ଆମ୍ ନଟ୍ ସାଟିସ୍ଫାଏଡ୍ ୱିଥ୍ ଦ ୱର୍କ ଡନ୍"],
    ["You", "I am sorry to hear that. What exactly is the problem?", "ଏହା ଶୁଣି ଦୁଃଖିତ। ପ୍ରକୃତରେ ସମସ୍ୟା କଣ?", "ଆଇ ଆମ୍ ସରି ଟୁ ହିଅର୍ ଦାଟ୍। ୱଟ୍ ଏକ୍ଜାକ୍ଟଲି ଇଜ୍ ଦ ପ୍ରବ୍ଲେମ୍"],
    ["Customer", "The switch stopped working after two days.", "ଦୁଇ ଦିନ ପରେ ସୁଇଚ୍ କାମ କରିବା ବନ୍ଦ କରିଦେଲା।", "ଦ ସ୍ୱିଚ୍ ଷ୍ଟପ୍ଡ ୱର୍କିଙ୍ଗ ଆଫ୍ଟର୍ ଟୁ ଡେଜ୍"],
    ["You", "I understand your concern. I will fix it free of cost.", "ମୁଁ ଆପଣଙ୍କ ଚିନ୍ତା ବୁଝିଲି। ମୁଁ ଏହାକୁ ମାଗଣାରେ ଠିକ୍ କରିଦେବି।", "ଆଇ ଅଣ୍ଡରଷ୍ଟାଣ୍ଡ ୟୁଅର୍ କନ୍ସର୍ନ। ଆଇ ୱିଲ୍ ଫିକ୍ସ ଇଟ୍ ଫ୍ରି ଅଫ୍ କଷ୍ଟ"],
    ["Customer", "I appreciate that. When can you come?", "ମୁଁ ଏହାର ପ୍ରଶଂସା କରେ। ଆପଣ କେବେ ଆସିପାରିବେ?", "ଆଇ ଆପ୍ରେସିଏଟ୍ ଦାଟ୍। ୱେନ୍ କେନ୍ ୟୁ କମ୍"],
    ["You", "I will come tomorrow morning without fail.", "ମୁଁ ନିଶ୍ଚିତ ଭାବରେ କାଲି ସକାଳେ ଆସିବି।", "ଆଇ ୱିଲ୍ କମ୍ ଟୁମରୋ ମର୍ନିଙ୍ଗ ୱିଦାଉଟ୍ ଫେଲ୍"],
  ]),
  topic("adv-explain", "Explaining a Complex Technical Fault", "ଜଟିଳ ଯାନ୍ତ୍ରିକ ତ୍ରୁଟି ବୁଝାଇବା", "advanced", ["You", "Client"], [
    ["You", "The main issue is a voltage fluctuation.", "ମୁଖ୍ୟ ସମସ୍ୟା ହେଉଛି ଭୋଲଟେଜ୍‌ର ଉତ୍ଥାନ-ପତନ।", "ଦ ମେନ୍ ଇସ୍ୟୁ ଇଜ୍ ଏ ଭୋଲଟେଜ୍ ଫ୍ଲକ୍ଚୁଏସନ୍"],
    ["Client", "What is causing the fluctuation?", "ଏହି ଉତ୍ଥାନ-ପତନର କାରଣ କଣ?", "ୱଟ୍ ଇଜ୍ କଜିଙ୍ଗ ଦ ଫ୍ଲକ୍ଚୁଏସନ୍"],
    ["You", "The old wiring cannot handle the current load.", "ପୁରୁଣା ତାର ବର୍ତ୍ତମାନ ଲୋଡ୍ ସହିପାରୁ ନାହିଁ।", "ଦ ଓଲ୍ଡ ୱାୟାରିଙ୍ଗ କ୍ୟାନଟ୍ ହ୍ୟାଣ୍ଡଲ୍ ଦ କରେଣ୍ଟ ଲୋଡ୍"],
    ["Client", "So what do you recommend?", "ତେବେ ଆପଣ କଣ ପରାମର୍ଶ ଦିଅନ୍ତି?", "ସୋ ୱଟ୍ ଡୁ ୟୁ ରେକମେଣ୍ଡ"],
    ["You", "I recommend upgrading the whole wiring system.", "ମୁଁ ସମ୍ପୂର୍ଣ୍ଣ ତାର ବ୍ୟବସ୍ଥା ଉନ୍ନତ କରିବାକୁ ପରାମର୍ଶ ଦେଉଛି।", "ଆଇ ରେକମେଣ୍ଡ ଅପ୍‌ଗ୍ରେଡିଙ୍ଗ ଦ ହୋଲ୍ ୱାୟାରିଙ୍ଗ ସିଷ୍ଟମ୍"],
    ["Client", "Please prepare a detailed estimate.", "ଦୟାକରି ଏକ ବିସ୍ତୃତ ହିସାବ ପ୍ରସ୍ତୁତ କରନ୍ତୁ।", "ପ୍ଲିଜ୍ ପ୍ରିପେୟାର୍ ଏ ଡିଟେଲ୍ଡ ଏଷ୍ଟିମେଟ୍"],
  ]),
  topic("adv-delay", "Discussing a Project Delay", "ପ୍ରକଳ୍ପ ବିଳମ୍ବ ବିଷୟରେ ଆଲୋଚନା", "advanced", ["Supervisor", "You"], [
    ["Supervisor", "Why is the project behind schedule?", "ପ୍ରକଳ୍ପ କାହିଁକି ସମୟସୂଚୀଠାରୁ ପଛରେ ଅଛି?", "ୱାଇ ଇଜ୍ ଦ ପ୍ରୋଜେକ୍ଟ ବିହାଇଣ୍ଡ ସ୍କେଜୁଲ୍"],
    ["You", "The material supply was delayed by three days.", "ସାମଗ୍ରୀ ଯୋଗାଣ ତିନି ଦିନ ବିଳମ୍ବିତ ହୋଇଥିଲା।", "ଦ ମେଟେରିଆଲ୍ ସପ୍ଲାଇ ୱାଜ୍ ଡିଲେଡ୍ ବାଇ ଥ୍ରି ଡେଜ୍"],
    ["Supervisor", "Can we make up for the lost time?", "ଆମେ ହରାଇଥିବା ସମୟ ପୂରଣ କରିପାରିବା କି?", "କ୍ୟାନ୍ ୱି ମେକ୍ ଅପ୍ ଫର୍ ଦ ଲଷ୍ଟ ଟାଇମ୍"],
    ["You", "Yes, I will add two extra workers.", "ହଁ, ମୁଁ ଦୁଇ ଜଣ ଅତିରିକ୍ତ କର୍ମଚାରୀ ଯୋଡ଼ିବି।", "ୟେସ୍, ଆଇ ୱିଲ୍ ଆଡ୍ ଟୁ ଏକ୍ସଟ୍ରା ୱର୍କର୍ସ"],
    ["Supervisor", "Good. Please update me daily.", "ବହୁତ ଭଲ। ଦୟାକରି ମୋତେ ପ୍ରତିଦିନ ଜଣାନ୍ତୁ।", "ଗୁଡ୍। ପ୍ଲିଜ୍ ଅପଡେଟ୍ ମି ଡେଲି"],
    ["You", "Sure, I will send a report every evening.", "ନିଶ୍ଚୟ, ମୁଁ ପ୍ରତି ସନ୍ଧ୍ୟାରେ ଏକ ରିପୋର୍ଟ ପଠାଇବି।", "ସ୍ୱୋର୍, ଆଇ ୱିଲ୍ ସେଣ୍ଡ ଏ ରିପୋର୍ଟ ଏଭ୍ରି ଇଭନିଙ୍ଗ"],
  ]),
  topic("adv-quality", "Discussing Quality Standards", "ଗୁଣବତ୍ତା ମାନ ବିଷୟରେ ଆଲୋଚନା", "advanced", ["Inspector", "You"], [
    ["Inspector", "This work does not meet the required standard.", "ଏହି କାମ ଆବଶ୍ୟକ ମାନଦଣ୍ଡ ପୂରଣ କରେନାହିଁ।", "ଦିସ୍ ୱର୍କ ଡଜ୍ ନଟ୍ ମିଟ୍ ଦ ରିକ୍ୱାୟାର୍ଡ ଷ୍ଟାଣ୍ଡାର୍ଡ"],
    ["You", "Could you please point out the exact issue?", "ଦୟାକରି ସଠିକ୍ ସମସ୍ୟା ନିର୍ଦ୍ଦେଶ କରିପାରିବେ କି?", "କୁଡ୍ ୟୁ ପ୍ଲିଜ୍ ପଏଣ୍ଟ ଆଉଟ୍ ଦ ଏକ୍ଜାକ୍ଟ ଇସ୍ୟୁ"],
    ["Inspector", "The connections are not properly insulated.", "ସଂଯୋଗଗୁଡ଼ିକ ଠିକ୍ ଭାବରେ ଇନ୍ସୁଲେଟ୍ ହୋଇନାହିଁ।", "ଦ କନେକ୍ସନ୍ସ ଆର୍ ନଟ୍ ପ୍ରପର୍‌ଲି ଇନ୍ସୁଲେଟେଡ୍"],
    ["You", "I will correct this immediately.", "ମୁଁ ଏହାକୁ ତୁରନ୍ତ ଠିକ୍ କରିବି।", "ଆଇ ୱିଲ୍ କରେକ୍ଟ ଦିସ୍ ଇମିଡିଏଟ୍‌ଲି"],
    ["Inspector", "Please follow the safety guidelines carefully.", "ଦୟାକରି ସୁରକ୍ଷା ନିର୍ଦ୍ଦେଶାବଳୀକୁ ସାବଧାନତାର ସହିତ ପାଳନ କରନ୍ତୁ।", "ପ୍ଲିଜ୍ ଫଲୋ ଦ ସେଫ୍‌ଟି ଗାଇଡ୍‌ଲାଇନ୍ସ କେୟାରଫୁଲି"],
    ["You", "I will make sure it does not happen again.", "ମୁଁ ନିଶ୍ଚିତ କରିବି ଯେ ଏହା ପୁଣି ନ ଘଟୁ।", "ଆଇ ୱିଲ୍ ମେକ୍ ସ୍ୱୋର୍ ଇଟ୍ ଡଜ୍ ନଟ୍ ହାପେନ୍ ଆଗେନ୍"],
  ]),
  topic("adv-disagree", "Resolving a Disagreement with a Colleague", "ସହକର୍ମୀଙ୍କ ସହ ମତଭେଦ ସମାଧାନ", "advanced", ["Colleague", "You"], [
    ["Colleague", "I don't think this approach will work.", "ମୁଁ ଭାବୁନାହିଁ ଏହି ପଦ୍ଧତି କାମ କରିବ।", "ଆଇ ଡୋଣ୍ଟ ଥିଙ୍କ ଦିସ୍ ଆପ୍ରୋଚ୍ ୱିଲ୍ ୱର୍କ"],
    ["You", "I understand your point, but let's try it once.", "ମୁଁ ଆପଣଙ୍କ କଥା ବୁଝୁଛି, କିନ୍ତୁ ଥରେ ଚେଷ୍ଟା କରିବା।", "ଆଇ ଅଣ୍ଡରଷ୍ଟାଣ୍ଡ ୟୁଅର୍ ପଏଣ୍ଟ, ବଟ୍ ଲେଟ୍ସ ଟ୍ରାଏ ଇଟ୍ ୱାନ୍ସ"],
    ["Colleague", "Alright, but what if it fails?", "ଠିକ୍ ଅଛି, କିନ୍ତୁ ଯଦି ଏହା ବିଫଳ ହୁଏ?", "ଅଲରାଇଟ୍, ବଟ୍ ୱଟ୍ ଇଫ୍ ଇଟ୍ ଫେଲ୍ସ"],
    ["You", "Then we will go back to your method.", "ତେବେ ଆମେ ଆପଣଙ୍କ ପଦ୍ଧତିକୁ ଫେରିଯିବୁ।", "ଦେନ୍ ୱି ୱିଲ୍ ଗୋ ବ୍ୟାକ୍ ଟୁ ୟୁଅର୍ ମେଥଡ୍"],
    ["Colleague", "Fair enough. Let's give it a try.", "ଠିକ୍ ଅଛି। ଚାଲ ଚେଷ୍ଟା କରିବା।", "ଫେୟାର୍ ଏନଫ୍। ଲେଟ୍ସ ଗିଭ୍ ଇଟ୍ ଏ ଟ୍ରାଏ"],
    ["You", "Thank you for being open to it.", "ଏଥିପାଇଁ ଖୋଲା ମନ ଥିବାରୁ ଧନ୍ୟବାଦ।", "ଥାଙ୍କ ୟୁ ଫର୍ ବିଇଙ୍ଗ ଓପନ୍ ଟୁ ଇଟ୍"],
  ]),
];

export function conversationsByGroup(group: ConversationGroupId): ConversationTopic[] {
  return CONVERSATION_TOPICS.filter((t) => t.group === group);
}
