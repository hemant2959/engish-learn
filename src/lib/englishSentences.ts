// Advanced-level sentence patterns for Odia-speaking learners — full useful
// sentences (not single words, not dialogues) grouped by function, with the
// same Odia meaning + phonetic pronunciation convention as englishLessons.ts.

import type { LessonCategory, LessonItem } from "@/lib/englishLessons";

function group(id: string, title: string, odiaTitle: string, rows: [string, string, string][]): LessonCategory {
  return {
    id,
    title,
    odiaTitle,
    level: "advanced",
    items: rows.map(([en, odiaMeaning, odiaPhonetic], i) => ({
      id: `${id}-${i}`,
      en,
      odiaMeaning,
      odiaPhonetic,
    })),
  };
}

export const SENTENCE_GROUPS: LessonCategory[] = [
  group("s-questions", "Asking Questions", "ପ୍ରଶ୍ନ ପଚାରିବା", [
    ["What time does it start?", "ଏହା କେତେ ବେଳେ ଆରମ୍ଭ ହେବ?", "ୱଟ୍ ଟାଇମ୍ ଡଜ୍ ଇଟ୍ ଷ୍ଟାର୍ଟ"],
    ["Could you tell me where the office is?", "ଅଫିସ୍ କେଉଁଠାରେ ଅଛି ମୋତେ କହିପାରିବେ କି?", "କୁଡ୍ ୟୁ ଟେଲ୍ ମି ୱେୟାର ଦ ଅଫିସ୍ ଇଜ୍"],
    ["Do you know how to get there?", "ସେଠାକୁ କିପରି ଯିବେ ଜାଣନ୍ତି କି?", "ଡୁ ୟୁ ନୋ ହାଉ ଟୁ ଗେଟ୍ ଦେୟାର୍"],
    ["What do you think about this?", "ଏହା ବିଷୟରେ ଆପଣ କଣ ଭାବୁଛନ୍ତି?", "ୱଟ୍ ଡୁ ୟୁ ଥିଙ୍କ ଅବାଉଟ୍ ଦିସ୍"],
    ["Is it possible to finish today?", "ଆଜି ସାରିବା ସମ୍ଭବ କି?", "ଇଜ୍ ଇଟ୍ ପସିବଲ୍ ଟୁ ଫିନିସ୍ ଟୁଡେ"],
    ["How long does it usually take?", "ସାଧାରଣତଃ ଏଥିରେ କେତେ ସମୟ ଲାଗେ?", "ହାଉ ଲଙ୍ଗ ଡଜ୍ ଇଟ୍ ୟୁଜୁଆଲି ଟେକ୍"],
    ["What should I do next?", "ମୁଁ ତା'ପରେ କଣ କରିବି?", "ୱଟ୍ ସୁଡ୍ ଆଇ ଡୁ ନେକ୍ସ୍ଟ"],
    ["Would that be okay with you?", "ତାହା ଆପଣଙ୍କ ପାଇଁ ଠିକ୍ ହେବ କି?", "ୱୁଡ୍ ଦାଟ୍ ବି ଓକେ ୱିଥ୍ ୟୁ"],
  ]),
  group("s-opinions", "Giving Opinions", "ମତାମତ ଦେବା", [
    ["I think this is a good idea.", "ମୁଁ ଭାବୁଛି ଏହା ଏକ ଭଲ ଚିନ୍ତାଧାରା।", "ଆଇ ଥିଙ୍କ ଦିସ୍ ଇଜ୍ ଏ ଗୁଡ୍ ଆଇଡିଆ"],
    ["In my opinion, we should wait.", "ମୋ ମତରେ, ଆମେ ଅପେକ୍ଷା କରିବା ଉଚିତ।", "ଇନ୍ ମାଇ ଓପିନିଅନ୍, ୱି ସୁଡ୍ ୱେଟ୍"],
    ["I believe this will work well.", "ମୁଁ ବିଶ୍ୱାସ କରେ ଏହା ଭଲ କାମ କରିବ।", "ଆଇ ବିଲିଭ୍ ଦିସ୍ ୱିଲ୍ ୱର୍କ ୱେଲ୍"],
    ["Personally, I would choose the first one.", "ବ୍ୟକ୍ତିଗତ ଭାବରେ, ମୁଁ ପ୍ରଥମଟି ବାଛିବି।", "ପର୍ସନାଲି, ଆଇ ୱୁଡ୍ ଚୁଜ୍ ଦ ଫର୍ଷ୍ଟ ୱାନ୍"],
    ["I am not sure that is correct.", "ମୁଁ ନିଶ୍ଚିତ ନୁହେଁ ଯେ ତାହା ଠିକ୍।", "ଆଇ ଆମ୍ ନଟ୍ ସ୍ୱୋର୍ ଦାଟ୍ ଇଜ୍ କରେକ୍ଟ"],
    ["That sounds like a great plan.", "ତାହା ଏକ ଉତ୍ତମ ଯୋଜନା ପରି ଲାଗୁଛି।", "ଦାଟ୍ ସାଉଣ୍ଡସ୍ ଲାଇକ୍ ଏ ଗ୍ରେଟ୍ ପ୍ଲାନ୍"],
    ["I would rather do it this way.", "ମୁଁ ବରଂ ଏହି ଉପାୟରେ କରିବି।", "ଆଇ ୱୁଡ୍ ରାଦର୍ ଡୁ ଇଟ୍ ଦିସ୍ ୱେ"],
    ["From my experience, this method is better.", "ମୋ ଅଭିଜ୍ଞତାରୁ, ଏହି ପଦ୍ଧତି ଭଲ।", "ଫ୍ରମ୍ ମାଇ ଏକ୍ସପେରିଏନ୍ସ, ଦିସ୍ ମେଥଡ୍ ଇଜ୍ ବେଟର୍"],
  ]),
  group("s-requests", "Requests & Offers", "ଅନୁରୋଧ ଓ ପ୍ରସ୍ତାବ", [
    ["Could you please help me with this?", "ଆପଣ ଦୟାକରି ଏଥିରେ ମୋତେ ସାହାଯ୍ୟ କରିପାରିବେ କି?", "କୁଡ୍ ୟୁ ପ୍ଲିଜ୍ ହେଲ୍ପ ମି ୱିଥ୍ ଦିସ୍"],
    ["Would you mind waiting a moment?", "ଟିକିଏ ଅପେକ୍ଷା କରିବାରେ ଆପଣଙ୍କର ଅସୁବିଧା ଅଛି କି?", "ୱୁଡ୍ ୟୁ ମାଇଣ୍ଡ ୱେଟିଙ୍ଗ ଏ ମୋମେଣ୍ଟ"],
    ["Let me know if you need anything.", "ଯଦି କିଛି ଦରକାର ମୋତେ ଜଣାନ୍ତୁ।", "ଲେଟ୍ ମି ନୋ ଇଫ୍ ୟୁ ନିଡ୍ ଏନିଥିଙ୍ଗ"],
    ["Can I offer you some help?", "ମୁଁ ଆପଣଙ୍କୁ କିଛି ସାହାଯ୍ୟ ଦେଇପାରିବି କି?", "କ୍ୟାନ୍ ଆଇ ଅଫର୍ ୟୁ ସମ୍ ହେଲ୍ପ"],
    ["Please let me know by tomorrow.", "ଦୟାକରି କାଲି ସୁଦ୍ଧା ମୋତେ ଜଣାନ୍ତୁ।", "ପ୍ଲିଜ୍ ଲେଟ୍ ମି ନୋ ବାଇ ଟୁମରୋ"],
    ["I would appreciate your help.", "ମୁଁ ଆପଣଙ୍କ ସାହାଯ୍ୟକୁ ପ୍ରଶଂସା କରିବି।", "ଆଇ ୱୁଡ୍ ଆପ୍ରେସିଏଟ୍ ୟୁଅର୍ ହେଲ୍ପ"],
    ["Shall I bring the tools tomorrow?", "ମୁଁ କାଲି ଉପକରଣ ଆଣିବି କି?", "ସାଲ୍ ଆଇ ବ୍ରିଙ୍ଗ ଦ ଟୁଲ୍ସ ଟୁମରୋ"],
    ["Feel free to call me anytime.", "ଯେକୌଣସି ସମୟରେ ମୋତେ ଫୋନ୍ କରିବାକୁ ସଙ୍କୋଚ କରନ୍ତୁ ନାହିଁ।", "ଫିଲ୍ ଫ୍ରି ଟୁ କଲ୍ ମି ଏନିଟାଇମ୍"],
  ]),
  group("s-plans", "Talking About Plans", "ଯୋଜନା ବିଷୟରେ କୁହିବା", [
    ["I am going to finish this by Friday.", "ମୁଁ ଏହାକୁ ଶୁକ୍ରବାର ସୁଦ୍ଧା ସାରିବି।", "ଆଇ ଆମ୍ ଗୋଇଙ୍ଗ ଟୁ ଫିନିସ୍ ଦିସ୍ ବାଇ ଫ୍ରାଇଡେ"],
    ["I will start the work tomorrow.", "ମୁଁ କାଲି କାମ ଆରମ୍ଭ କରିବି।", "ଆଇ ୱିଲ୍ ଷ୍ଟାର୍ଟ ଦ ୱର୍କ ଟୁମରୋ"],
    ["I was planning to visit next week.", "ମୁଁ ଆସନ୍ତା ସପ୍ତାହରେ ଯିବାକୁ ଯୋଜନା କରୁଥିଲି।", "ଆଇ ୱାଜ୍ ପ୍ଲାନିଙ୍ଗ ଟୁ ଭିଜିଟ୍ ନେକ୍ସ୍ଟ ୱିକ୍"],
    ["We are meeting at ten o'clock.", "ଆମେ ଦଶଟାରେ ଭେଟିବୁ।", "ୱି ଆର୍ ମିଟିଙ୍ଗ ଆଟ୍ ଟେନ୍ ଓ'କ୍ଲକ୍"],
    ["I intend to buy new tools soon.", "ମୁଁ ଶୀଘ୍ର ନୂଆ ଉପକରଣ କିଣିବାକୁ ଉଦ୍ଦେଶ୍ୟ କରୁଛି।", "ଆଇ ଇଣ୍ଟେଣ୍ଡ ଟୁ ବାଏ ନ୍ୟୁ ଟୁଲ୍ସ ସୁନ୍"],
    ["What are your plans for the weekend?", "ସପ୍ତାହ ଶେଷ ପାଇଁ ଆପଣଙ୍କ ଯୋଜନା କଣ?", "ୱଟ୍ ଆର୍ ୟୁଅର୍ ପ୍ଲାନ୍ସ ଫର୍ ଦ ୱିକଏଣ୍ଡ"],
    ["I hope to complete the training this month.", "ମୁଁ ଏହି ମାସରେ ତାଲିମ ସମାପ୍ତ କରିବାକୁ ଆଶା କରୁଛି।", "ଆଇ ହୋପ୍ ଟୁ କମ୍ପ୍ଲିଟ୍ ଦ ଟ୍ରେନିଙ୍ଗ ଦିସ୍ ମନ୍ଥ"],
    ["I am thinking of changing my job.", "ମୁଁ ମୋ ଚାକିରି ବଦଳାଇବାକୁ ଭାବୁଛି।", "ଆଇ ଆମ୍ ଥିଙ୍କିଙ୍ଗ ଅଫ୍ ଚେଞ୍ଜିଙ୍ଗ ମାଇ ଜବ୍"],
  ]),
  group("s-comparisons", "Making Comparisons", "ତୁଳନା କରିବା", [
    ["This one is better than that one.", "ଏହାଟି ସେଥିଠାରୁ ଭଲ।", "ଦିସ୍ ୱାନ୍ ଇଜ୍ ବେଟର୍ ଦାନ୍ ଦାଟ୍ ୱାନ୍"],
    ["This tool is as good as the old one.", "ଏହି ଉପକରଣଟି ପୁରୁଣା ଟି ପରି ଭଲ।", "ଦିସ୍ ଟୁଲ୍ ଇଜ୍ ଆଜ୍ ଗୁଡ୍ ଆଜ୍ ଦ ଓଲ୍ଡ ୱାନ୍"],
    ["This is the most expensive option.", "ଏହା ସବୁଠାରୁ ମହଙ୍ଗା ବିକଳ୍ପ।", "ଦିସ୍ ଇଜ୍ ଦ ମୋଷ୍ଟ ଏକ୍ସପେନ୍ସିଭ୍ ଅପ୍‌ସନ୍"],
    ["That job was easier than this one.", "ସେହି କାମଟି ଏଥିଠାରୁ ସହଜ ଥିଲା।", "ଦାଟ୍ ଜବ୍ ୱାଜ୍ ଇଜିଅର୍ ଦାନ୍ ଦିସ୍ ୱାନ୍"],
    ["This brand is more reliable.", "ଏହି ବ୍ରାଣ୍ଡଟି ଅଧିକ ଭରସାଯୋଗ୍ୟ।", "ଦିସ୍ ବ୍ରାଣ୍ଡ ଇଜ୍ ମୋର୍ ରିଲାଏବଲ୍"],
    ["It is cheaper to repair than replace.", "ବଦଳାଇବା ଅପେକ୍ଷା ମରାମତି କରିବା ସସ୍ତା।", "ଇଟ୍ ଇଜ୍ ଚିପର୍ ଟୁ ରିପେୟାର୍ ଦାନ୍ ରିପ୍ଲେସ୍"],
    ["This is the best quality available.", "ଏହା ଉପଲବ୍ଧ ସର୍ବୋତ୍ତମ କ୍ୱାଲିଟି।", "ଦିସ୍ ଇଜ୍ ଦ ବେଷ୍ଟ କ୍ୱାଲିଟି ଆଭେଲେବଲ୍"],
    ["Today's work is harder than yesterday's.", "ଆଜିର କାମ କାଲିଠାରୁ କଠିନ।", "ଟୁଡେଜ୍ ୱର୍କ ଇଜ୍ ହାର୍ଡର୍ ଦାନ୍ ୟେଷ୍ଟର୍ଡେଜ୍"],
  ]),
  group("s-problems", "Describing Problems", "ସମସ୍ୟା ବର୍ଣ୍ଣନା କରିବା", [
    ["The issue is that the wire is loose.", "ସମସ୍ୟା ହେଉଛି ତାର ଢିଲା ହୋଇଛି।", "ଦ ଇସ୍ୟୁ ଇଜ୍ ଦାଟ୍ ଦ ୱାୟାର୍ ଇଜ୍ ଲୁଜ୍"],
    ["It seems like there is a bigger problem.", "ମନେହୁଏ ଏଥିରେ ଏକ ବଡ଼ ସମସ୍ୟା ଅଛି।", "ଇଟ୍ ସିମ୍ସ ଲାଇକ୍ ଦେୟାର୍ ଇଜ୍ ଏ ବିଗର୍ ପ୍ରବ୍ଲେମ୍"],
    ["I noticed that it stopped working suddenly.", "ମୁଁ ଲକ୍ଷ୍ୟ କଲି ଏହା ହଠାତ୍ ବନ୍ଦ ହୋଇଗଲା।", "ଆଇ ନୋଟିସ୍ଡ ଦାଟ୍ ଇଟ୍ ଷ୍ଟପ୍ଡ ୱର୍କିଙ୍ଗ ସଡେନ୍‌ଲି"],
    ["Something is not working properly.", "କିଛି ଠିକ୍ ଭାବରେ କାମ କରୁନାହିଁ।", "ସମଥିଙ୍ଗ ଇଜ୍ ନଟ୍ ୱର୍କିଙ୍ଗ ପ୍ରପର୍‌ଲି"],
    ["There seems to be a delay in delivery.", "ଡେଲିଭରୀରେ ବିଳମ୍ବ ହେଉଥିବା ପରି ଲାଗୁଛି।", "ଦେୟାର୍ ସିମ୍ସ ଟୁ ବି ଏ ଡିଲେ ଇନ୍ ଡେଲିଭରି"],
    ["This has been a recurring problem.", "ଏହା ବାରମ୍ବାର ହେଉଥିବା ସମସ୍ୟା।", "ଦିସ୍ ହ୍ୟାଜ୍ ବିନ୍ ଏ ରିକରିଙ୍ଗ ପ୍ରବ୍ଲେମ୍"],
    ["I am facing some difficulty here.", "ମୁଁ ଏଠାରେ କିଛି ଅସୁବିଧାର ସମ୍ମୁଖୀନ ହେଉଛି।", "ଆଇ ଆମ୍ ଫେସିଙ୍ଗ ସମ୍ ଡିଫିକଲ୍ଟି ହିଅର୍"],
    ["This needs to be fixed as soon as possible.", "ଏହାକୁ ଯଥାଶୀଘ୍ର ଠିକ୍ କରିବାକୁ ପଡ଼ିବ।", "ଦିସ୍ ନିଡ୍ସ ଟୁ ବି ଫିକ୍ସ୍ଡ ଆଜ୍ ସୁନ୍ ଆଜ୍ ପସିବଲ୍"],
  ]),

  // ---------- Grammar-focused daily sentences ----------
  group("s-present", "Present Tense · Daily Routine", "ବର୍ତ୍ତମାନ କାଳ · ଦୈନନ୍ଦିନ ଜୀବନ", [
    ["I wake up at six every morning.", "ମୁଁ ପ୍ରତିଦିନ ସକାଳ ଛଅଟାରେ ଉଠେ।", "ଆଇ ୱେକ୍ ଅପ୍ ଆଟ୍ ସିକ୍ସ ଏଭ୍ରି ମର୍ନିଙ୍ଗ"],
    ["I brush my teeth and take a bath.", "ମୁଁ ଦାନ୍ତ ମାଜେ ଏବଂ ଗାଧୋଏ।", "ଆଇ ବ୍ରଶ୍ ମାଇ ଟିଥ୍ ଆଣ୍ଡ ଟେକ୍ ଏ ବାଥ୍"],
    ["I go to work at eight o'clock.", "ମୁଁ ଆଠଟାରେ କାମକୁ ଯାଏ।", "ଆଇ ଗୋ ଟୁ ୱର୍କ ଆଟ୍ ଏଟ୍ ଓ'କ୍ଲକ୍"],
    ["She cooks food for the family.", "ସେ ପରିବାର ପାଇଁ ରାନ୍ଧେ।", "ସି କୁକ୍ସ ଫୁଡ୍ ଫର୍ ଦ ଫ୍ୟାମିଲି"],
    ["We eat lunch together at noon.", "ଆମେ ମଧ୍ୟାହ୍ନରେ ଏକାଠି ଖାଉ।", "ୱି ଇଟ୍ ଲଞ୍ଚ ଟୁଗେଦର୍ ଆଟ୍ ନୁନ୍"],
    ["He works hard every single day.", "ସେ ପ୍ରତିଦିନ କଠିନ ପରିଶ୍ରମ କରନ୍ତି।", "ହି ୱର୍କ୍ସ ହାର୍ଡ ଏଭ୍ରି ସିଙ୍ଗଲ୍ ଡେ"],
    ["I return home in the evening.", "ମୁଁ ସନ୍ଧ୍ୟାରେ ଘରକୁ ଫେରେ।", "ଆଇ ରିଟର୍ନ୍ ହୋମ୍ ଇନ୍ ଦି ଇଭନିଙ୍ଗ"],
    ["I sleep by ten at night.", "ମୁଁ ରାତିରେ ଦଶଟା ସୁଦ୍ଧା ଶୋଏ।", "ଆଇ ସ୍ଲିପ୍ ବାଇ ଟେନ୍ ଆଟ୍ ନାଇଟ୍"],
  ]),
  group("s-past", "Past Tense · Things That Happened", "ଅତୀତ କାଳ · ଘଟିଥିବା ଘଟଣା", [
    ["I finished the work yesterday.", "ମୁଁ କାଲି କାମ ସାରିଦେଲି।", "ଆଇ ଫିନିସ୍ଡ ଦ ୱର୍କ ୟେଷ୍ଟର୍ଡେ"],
    ["She went to the market last evening.", "ସେ ଗତ ସନ୍ଧ୍ୟାରେ ବଜାରକୁ ଗଲେ।", "ସି ୱେଣ୍ଟ ଟୁ ଦ ମାର୍କେଟ୍ ଲାଷ୍ଟ ଇଭନିଙ୍ଗ"],
    ["We met our neighbours last week.", "ଆମେ ଗତ ସପ୍ତାହରେ ପଡ଼ୋଶୀଙ୍କୁ ଭେଟିଥିଲୁ।", "ୱି ମେଟ୍ ଆୱାର୍ ନେବର୍ସ ଲାଷ୍ଟ ୱିକ୍"],
    ["He repaired the fan this morning.", "ସେ ଆଜି ସକାଳେ ପମ୍ପା ମରାମତି କଲେ।", "ହି ରିପେୟାର୍ଡ ଦ ଫ୍ୟାନ୍ ଦିସ୍ ମର୍ନିଙ୍ଗ"],
    ["I ate rice and dal for lunch.", "ମୁଁ ମଧ୍ୟାହ୍ନ ଭୋଜନରେ ଭାତ ଓ ଡାଲି ଖାଇଲି।", "ଆଇ ଏଟ୍ ରାଇସ୍ ଆଣ୍ଡ ଡାଲ୍ ଫର୍ ଲଞ୍ଚ"],
    ["They came to my house yesterday.", "ସେମାନେ କାଲି ମୋ ଘରକୁ ଆସିଥିଲେ।", "ଦେ କେମ୍ ଟୁ ମାଇ ହାଉସ୍ ୟେଷ୍ଟର୍ଡେ"],
    ["I bought new tools last month.", "ମୁଁ ଗତ ମାସ ନୂଆ ଉପକରଣ କିଣିଥିଲି।", "ଆଇ ବଟ୍ ନ୍ୟୁ ଟୁଲ୍ସ ଲାଷ୍ଟ ମନ୍ଥ"],
    ["We watched a movie last Sunday.", "ଆମେ ଗତ ରବିବାର ଏକ ସିନେମା ଦେଖିଥିଲୁ।", "ୱି ୱାଚ୍ଡ ଏ ମୁଭି ଲାଷ୍ଟ ସନ୍‌ଡେ"],
  ]),
  group("s-future", "Future Tense · Things to Come", "ଭବିଷ୍ୟତ କାଳ · ଆଗାମୀ ଘଟଣା", [
    ["I will go to the market tomorrow.", "ମୁଁ କାଲି ବଜାରକୁ ଯିବି।", "ଆଇ ୱିଲ୍ ଗୋ ଟୁ ଦ ମାର୍କେଟ୍ ଟୁମରୋ"],
    ["She will finish the job by evening.", "ସେ ସନ୍ଧ୍ୟା ସୁଦ୍ଧା କାମ ସାରିବେ।", "ସି ୱିଲ୍ ଫିନିସ୍ ଦ ଜବ୍ ବାଇ ଇଭନିଙ୍ଗ"],
    ["We will meet at the office tomorrow.", "ଆମେ କାଲି ଅଫିସରେ ଭେଟିବୁ।", "ୱି ୱିଲ୍ ମିଟ୍ ଆଟ୍ ଦ ଅଫିସ୍ ଟୁମରୋ"],
    ["He will bring the new parts next week.", "ସେ ଆସନ୍ତା ସପ୍ତାହରେ ନୂଆ ପାର୍ଟ୍ସ ଆଣିବେ।", "ହି ୱିଲ୍ ବ୍ରିଙ୍ଗ ଦ ନ୍ୟୁ ପାର୍ଟ୍ସ ନେକ୍ସ୍ଟ ୱିକ୍"],
    ["I will call you after lunch.", "ମୁଁ ମଧ୍ୟାହ୍ନ ଭୋଜନ ପରେ ତୁମକୁ ଫୋନ୍ କରିବି।", "ଆଇ ୱିଲ୍ କଲ୍ ୟୁ ଆଫ୍ଟର୍ ଲଞ୍ଚ"],
    ["They will start the project next month.", "ସେମାନେ ଆସନ୍ତା ମାସରେ ପ୍ରକଳ୍ପ ଆରମ୍ଭ କରିବେ।", "ଦେ ୱିଲ୍ ଷ୍ଟାର୍ଟ ଦ ପ୍ରୋଜେକ୍ଟ ନେକ୍ସ୍ଟ ମନ୍ଥ"],
    ["We will visit our village this festival.", "ଆମେ ଏହି ପର୍ବରେ ଆମ ଗାଁକୁ ଯିବୁ।", "ୱି ୱିଲ୍ ଭିଜିଟ୍ ଆୱାର୍ ଭିଲେଜ୍ ଦିସ୍ ଫେଷ୍ଟିଭାଲ୍"],
    ["I will save some money every month.", "ମୁଁ ପ୍ରତି ମାସ କିଛି ଟଙ୍କା ସଞ୍ଚୟ କରିବି।", "ଆଇ ୱିଲ୍ ସେଭ୍ ସମ୍ ମନି ଏଭ୍ରି ମନ୍ଥ"],
  ]),
  group("s-adjectives", "Using Adjectives", "ବିଶେଷଣ ଶବ୍ଦର ବ୍ୟବହାର", [
    ["This road is very busy in the morning.", "ଏହି ରାସ୍ତା ସକାଳେ ବହୁତ ବ୍ୟସ୍ତ ଥାଏ।", "ଦିସ୍ ରୋଡ୍ ଇଜ୍ ଭେରି ବିଜି ଇନ୍ ଦ ମର୍ନିଙ୍ଗ"],
    ["The new tools are very sharp.", "ନୂଆ ଉପକରଣଗୁଡ଼ିକ ବହୁତ ତୀକ୍ଷ୍ଣ।", "ଦ ନ୍ୟୁ ଟୁଲ୍ସ ଆର୍ ଭେରି ସାର୍ପ"],
    ["This house is bigger than that one.", "ଏହି ଘର ସେଥିଠାରୁ ବଡ଼।", "ଦିସ୍ ହାଉସ୍ ଇଜ୍ ବିଗର୍ ଦାନ୍ ଦାଟ୍ ୱାନ୍"],
    ["The weather is quite pleasant today.", "ଆଜି ପାଣିପାଗ ବେଶ୍ ସୁଖଦ।", "ଦ ୱେଦର୍ ଇଜ୍ କ୍ୱାଇଟ୍ ପ୍ଲେଜାଣ୍ଟ ଟୁଡେ"],
    ["This job needs a skilled worker.", "ଏହି କାମ ପାଇଁ ଜଣେ ଦକ୍ଷ କର୍ମଚାରୀ ଦରକାର।", "ଦିସ୍ ଜବ୍ ନିଡ୍ସ ଏ ସ୍କିଲ୍ଡ ୱର୍କର୍"],
    ["The old wiring is very risky.", "ପୁରୁଣା ତାର ବହୁତ ବିପଦଜନକ।", "ଦ ଓଲ୍ଡ ୱାୟାରିଙ୍ଗ ଇଜ୍ ଭେରି ରିସ୍କି"],
    ["This is a simple and quick job.", "ଏହା ଏକ ସରଳ ଓ ଶୀଘ୍ର କାମ।", "ଦିସ୍ ଇଜ୍ ଏ ସିମ୍ପଲ୍ ଆଣ୍ଡ କ୍ୱିକ୍ ଜବ୍"],
    ["He is a very honest person.", "ସେ ଜଣେ ବହୁତ ସାଧୁ ବ୍ୟକ୍ତି।", "ହି ଇଜ୍ ଏ ଭେରି ଅନେଷ୍ଟ ପର୍ସନ୍"],
  ]),
  group("s-verbs", "Using Verbs", "କ୍ରିୟା ଶବ୍ଦର ବ୍ୟବହାର", [
    ["I clean my tools after every job.", "ମୁଁ ପ୍ରତ୍ୟେକ କାମ ପରେ ମୋ ଉପକରଣ ସଫା କରେ।", "ଆଇ କ୍ଲିନ୍ ମାଇ ଟୁଲ୍ସ ଆଫ୍ଟର୍ ଏଭ୍ରି ଜବ୍"],
    ["She teaches children in the village school.", "ସେ ଗାଁ ସ୍କୁଲରେ ପିଲାଙ୍କୁ ପଢ଼ାନ୍ତି।", "ସି ଟିଚେସ୍ ଚିଲ୍ଡ୍ରେନ୍ ଇନ୍ ଦ ଭିଲେଜ୍ ସ୍କୁଲ୍"],
    ["We save water whenever we can.", "ଆମେ ଯେତେବେଳେ ସମ୍ଭବ ପାଣି ସଞ୍ଚୟ କରୁ।", "ୱି ସେଭ୍ ୱାଟର୍ ୱେନେଭର୍ ୱି କେନ୍"],
    ["He drives the auto very carefully.", "ସେ ଅଟୋ ବହୁତ ସାବଧାନତାର ସହିତ ଚଲାନ୍ତି।", "ହି ଡ୍ରାଇଭ୍ସ ଦି ଅଟୋ ଭେରି କେୟାରଫୁଲି"],
    ["I check the connections before leaving.", "ମୁଁ ଯିବା ପୂର୍ବରୁ ସଂଯୋଗ ଯାଞ୍ଚ କରେ।", "ଆଇ ଚେକ୍ ଦ କନେକ୍ସନ୍ସ ବିଫୋର୍ ଲିଭିଙ୍ଗ"],
    ["They help each other during work.", "ସେମାନେ କାମ ସମୟରେ ପରସ୍ପରକୁ ସାହାଯ୍ୟ କରନ୍ତି।", "ଦେ ହେଲ୍ପ ଇଚ୍ ଅଦର୍ ଡ୍ୟୁରିଙ୍ଗ ୱର୍କ"],
    ["I repair small appliances at home.", "ମୁଁ ଘରେ ଛୋଟ ଉପକରଣ ମରାମତି କରେ।", "ଆଇ ରିପେୟାର୍ ସ୍ମଲ୍ ଆପ୍ଲାଏନ୍ସେସ୍ ଆଟ୍ ହୋମ୍"],
    ["She manages the shop very well.", "ସେ ଦୋକାନଟିକୁ ବହୁତ ଭଲ ଭାବରେ ଚଳାନ୍ତି।", "ସି ମ୍ୟାନେଜେସ୍ ଦ ସପ୍ ଭେରି ୱେଲ୍"],
  ]),
  group("s-nouns", "Using Nouns", "ବିଶେଷ୍ୟ ଶବ୍ଦର ବ୍ୟବହାର", [
    ["The kitchen needs a new light.", "ରୋଷେଇ ଘରକୁ ଏକ ନୂଆ ଲାଇଟ୍ ଦରକାର।", "ଦ କିଚେନ୍ ନିଡ୍ସ ଏ ନ୍ୟୁ ଲାଇଟ୍"],
    ["My family lives in a small village.", "ମୋ ପରିବାର ଏକ ଛୋଟ ଗାଁରେ ରୁହନ୍ତି।", "ମାଇ ଫ୍ୟାମିଲି ଲିଭ୍ସ ଇନ୍ ଏ ସ୍ମଲ୍ ଭିଲେଜ୍"],
    ["The customer left a good review.", "ଗ୍ରାହକ ଏକ ଭଲ ମତାମତ ଦେଇଥିଲେ।", "ଦ କଷ୍ଟମର୍ ଲେଫ୍ଟ ଏ ଗୁଡ୍ ରିଭ୍ୟୁ"],
    ["This tool box belongs to my father.", "ଏହି ଉପକରଣ ବାକ୍ସ ମୋ ବାପାଙ୍କର।", "ଦିସ୍ ଟୁଲ୍ ବକ୍ସ ବିଲଙ୍ଗ୍ସ ଟୁ ମାଇ ଫାଦର୍"],
    ["The meeting is scheduled for ten o'clock.", "ବୈଠକ ଦଶଟା ପାଇଁ ନିର୍ଧାରିତ ଅଛି।", "ଦ ମିଟିଙ୍ଗ ଇଜ୍ ସ୍କେଜୁଲ୍ଡ ଫର୍ ଟେନ୍ ଓ'କ୍ଲକ୍"],
    ["Please keep the receipt safely.", "ଦୟାକରି ରସିଦଟି ସୁରକ୍ଷିତ ରଖନ୍ତୁ।", "ପ୍ଲିଜ୍ କିପ୍ ଦ ରିସିଟ୍ ସେଫ୍‌ଲି"],
    ["The school is near the temple.", "ସ୍କୁଲଟି ମନ୍ଦିର ପାଖରେ ଅଛି।", "ଦ ସ୍କୁଲ୍ ଇଜ୍ ନିଅର୍ ଦ ଟେମ୍ପଲ୍"],
    ["Our village has one primary health centre.", "ଆମ ଗାଁରେ ଏକ ପ୍ରାଥମିକ ସ୍ୱାସ୍ଥ୍ୟ କେନ୍ଦ୍ର ଅଛି।", "ଆୱାର୍ ଭିଲେଜ୍ ହ୍ୟାଜ୍ ୱାନ୍ ପ୍ରାଇମାରି ହେଲ୍ଥ ସେଣ୍ଟର୍"],
  ]),
];

export function allSentenceItems(): { category: LessonCategory; item: LessonItem }[] {
  return SENTENCE_GROUPS.flatMap((category) => category.items.map((item) => ({ category, item })));
}
