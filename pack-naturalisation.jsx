<!DOCTYPE html>
<html lang="fr">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<title>Entraînement Entretien Naturalisation Française 🇫🇷</title>
<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600;700&family=Source+Sans+3:wght@400;500;600;700&display=swap" rel="stylesheet" />
<style>
  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
  body { font-family: 'Source Sans 3', 'Segoe UI', sans-serif; background: #f7fafc; min-height: 100vh; }
  #app { max-width: 640px; margin: 0 auto; min-height: 100vh; background: #f7fafc; }
  .header { background: linear-gradient(135deg, #002654 0%, #0055A4 60%, #EF4135 100%); padding: 28px 20px 20px; color: #fff; }
  .header h1 { font-family: 'Playfair Display', serif; font-size: 21px; font-weight: 700; }
  .header p { font-size: 13px; opacity: 0.85; margin-top: 6px; }
  .tabs { display: flex; overflow-x: auto; gap: 6px; padding: 12px 12px 8px; background: #fff; border-bottom: 1px solid #e2e8f0; -webkit-overflow-scrolling: touch; scrollbar-width: none; }
  .tabs::-webkit-scrollbar { display: none; }
  .tab-btn { padding: 8px 12px; border-radius: 8px; border: 1px solid #e2e8f0; background: #fff; color: #4a5568; font-size: 12px; font-weight: 600; cursor: pointer; white-space: nowrap; flex-shrink: 0; font-family: inherit; transition: all 0.2s; }
  .tab-btn.active { background: #0055A4; color: #fff; border-color: #0055A4; }
  .search-wrap { padding: 12px 16px 0; }
  .search-input { width: 100%; padding: 12px 16px; border-radius: 10px; border: 1.5px solid #e2e8f0; font-size: 14px; outline: none; background: #fff; font-family: inherit; }
  .content { padding: 16px; }
  /* Info */
  .info-hero { background: linear-gradient(135deg, #0055A4 0%, #EF4135 100%); border-radius: 16px; padding: 24px 20px; color: #fff; margin-bottom: 16px; }
  .info-hero h2 { font-family: 'Playfair Display', serif; font-size: 20px; font-weight: 700; }
  .info-hero p { margin-top: 8px; font-size: 14px; opacity: 0.9; line-height: 1.5; }
  details { background: #fff; border-radius: 12px; border: 1px solid #e2e8f0; overflow: hidden; margin-bottom: 10px; }
  summary { padding: 16px 20px; cursor: pointer; font-weight: 600; font-size: 15px; color: #1a365d; list-style: none; display: flex; align-items: center; gap: 8px; }
  summary::-webkit-details-marker { display: none; }
  summary::after { content: '▸'; margin-left: auto; font-size: 12px; color: #a0aec0; transition: transform 0.2s; }
  details[open] summary::after { transform: rotate(90deg); }
  .detail-body { padding: 0 20px 16px; font-size: 14px; line-height: 1.7; color: #2d3748; white-space: pre-line; }
  /* Flashcards */
  .fc-meta { display: flex; justify-content: space-between; font-size: 13px; color: #718096; margin-bottom: 8px; }
  .progress-bar { width: 100%; background: #e2e8f0; border-radius: 6px; height: 6px; overflow: hidden; margin-bottom: 16px; }
  .progress-fill { height: 100%; background: linear-gradient(90deg, #0055A4, #EF4135); border-radius: 6px; transition: width 0.4s ease; }
  .card { background: #fff; border-radius: 16px; border: 2px solid #e2e8f0; padding: 24px; min-height: 200px; cursor: pointer; transition: all 0.3s ease; display: flex; flex-direction: column; justify-content: center; }
  .card.flipped { background: linear-gradient(135deg, #f0f7ff 0%, #e8f4fd 100%); border-color: #0055A4; box-shadow: 0 4px 20px rgba(0,85,164,0.1); }
  .card-label { font-size: 11px; text-transform: uppercase; letter-spacing: 1.5px; color: #a0aec0; margin-bottom: 10px; font-weight: 700; }
  .card.flipped .card-label { color: #0055A4; }
  .card-text { font-size: 17px; font-weight: 600; color: #1a365d; line-height: 1.7; }
  .card.flipped .card-text { font-size: 14px; font-weight: 400; }
  .fc-btns { display: flex; gap: 12px; margin-top: 4px; }
  .btn-unknown { flex: 1; padding: 14px 0; border-radius: 12px; border: 2px solid #EF4135; background: #fff5f5; color: #c53030; font-size: 15px; font-weight: 600; cursor: pointer; font-family: inherit; }
  .btn-known { flex: 1; padding: 14px 0; border-radius: 12px; border: none; background: #0055A4; color: #fff; font-size: 15px; font-weight: 600; cursor: pointer; font-family: inherit; }
  .result-box { text-align: center; padding: 32px; }
  .result-emoji { font-size: 48px; margin-bottom: 12px; }
  .result-box h3 { color: #1a365d; font-family: 'Playfair Display', serif; font-size: 22px; margin-bottom: 8px; }
  .result-box p { color: #4a5568; font-size: 14px; margin-bottom: 20px; }
  .btn-restart { background: #0055A4; color: #fff; border: none; border-radius: 10px; padding: 12px 28px; font-size: 15px; cursor: pointer; font-weight: 600; font-family: inherit; }
  /* Quiz */
  .quiz-q { font-size: 16px; font-weight: 600; color: #1a365d; line-height: 1.5; margin: 0 0 16px; }
  .quiz-opts { display: flex; flex-direction: column; gap: 10px; }
  .quiz-opt { text-align: left; padding: 14px 16px; border-radius: 12px; border: 1.5px solid #e2e8f0; background: #fff; color: #2d3748; font-size: 14px; cursor: pointer; font-weight: 500; transition: all 0.2s; font-family: inherit; }
  .quiz-opt.correct { background: #f0fff4 !important; border: 2px solid #38a169 !important; color: #22543d !important; font-weight: 700; }
  .quiz-opt.wrong { background: #fff5f5 !important; border: 2px solid #e53e3e !important; color: #9b2c2c !important; }
  .quiz-correction { background: #f7fafc; border-radius: 12px; padding: 14px 16px; border: 1px solid #e2e8f0; margin-top: 8px; }
  .quiz-corr-label { font-size: 12px; font-weight: 700; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 6px; }
  .quiz-corr-text { font-size: 13px; line-height: 1.6; color: #2d3748; }
  .quiz-next { align-self: flex-end; background: #0055A4; color: #fff; border: none; border-radius: 10px; padding: 12px 24px; font-size: 14px; cursor: pointer; font-weight: 600; font-family: inherit; margin-top: 8px; display: block; }
  .quiz-score { display: flex; justify-content: space-between; font-size: 13px; color: #718096; margin-bottom: 8px; }
  .no-results { text-align: center; padding: 32px; color: #718096; }
  .footer { text-align: center; padding: 16px 20px 32px; font-size: 11px; color: #a0aec0; line-height: 1.6; }
</style>
</head>
<body>
<div id="app">
  <div class="header">
    <h1>Entraînement Entretien Naturalisation Française 🇫🇷</h1>
    <p id="header-stats"></p>
  </div>
  <div class="tabs" id="tabs"></div>
  <div id="search-area"></div>
  <div class="content" id="content"></div>
  <div class="footer">Sources : entretiens réels (préfectures + TikTok + forums),<br>Livret du citoyen, réforme 2026 (circulaire Retailleau, décret 2025-1345)</div>
</div>

<script>
const CATEGORIES = [
  { id: "info", label: "ℹ️ Info 2026", icon: "📋" },
  { id: "perso", label: "Personnel & Motivation", icon: "👤" },
  { id: "valeurs", label: "Valeurs & Laïcité", icon: "⚖️" },
  { id: "societe", label: "Société & Égalité", icon: "🤝" },
  { id: "institutions", label: "Institutions", icon: "🏛️" },
  { id: "histoire", label: "Histoire", icon: "📜" },
  { id: "geographie", label: "Géographie", icon: "🗺️" },
  { id: "culture", label: "Culture & Personnalités", icon: "🎭" },
  { id: "actualite", label: "Actualité & Opinion", icon: "📰" },
  { id: "europe", label: "Europe & Monde", icon: "🇪🇺" },
  { id: "quiz", label: "Quiz Express", icon: "🧠" },
];

const INFO_2026 = [
  { title: "Niveau de français requis", content: "Depuis le 1er janvier 2026, le niveau B2 oral est exigé (contre B1 auparavant), y compris pour la naturalisation par mariage. Vous devez fournir un diplôme ou une certification reconnue (TCF, DELF B2…).", emoji: "🗣️" },
  { title: "Examen civique obligatoire (NOUVEAU)", content: "Un QCM de 40 questions sur tablette/ordinateur, en 45 minutes. Il faut obtenir au moins 32/40 (80%). Les 5 thématiques : Valeurs de la République, Institutions, Droits & Devoirs, Histoire-Géographie-Culture, Vie en société. Coût : 70 € par tentative. En cas d'échec, vous pouvez repasser sans limite.", emoji: "📝" },
  { title: "Circulaire Retailleau (mai 2025)", content: "Cette circulaire a durci les conditions : niveau B2 obligatoire, insertion professionnelle démontrée sur 5 ans, tolérance zéro en cas de séjour irrégulier ou de dettes fiscales. Les préfets sont plus exigeants sur l'ensemble du dossier.", emoji: "⚠️" },
  { title: "L'entretien d'assimilation (oral)", content: "L'examen civique NE remplace PAS l'entretien oral ! Les deux sont obligatoires. L'entretien dure 20 à 50 minutes avec un agent de préfecture qui évalue votre intégration, vos connaissances et votre niveau de français.", emoji: "🎤" },
  { title: "Les 4 étapes de l'entretien", content: "1) Vérification de votre dossier et pièces\n2) Lecture et signature de la Charte des droits et devoirs du citoyen français\n3) Présentation personnelle (études, parcours pro, vie en France)\n4) Questions de l'agent (culture générale + questions personnelles)", emoji: "📋" },
  { title: "Conseils clés pour réussir", content: "• Parlez avec vos propres mots, ne récitez pas\n• Montrez votre attachement à la France et ses valeurs\n• Soyez honnête sur votre parcours\n• Connaissez votre ville, département, région, préfet, maire\n• Suivez l'actualité française récente\n• Entraînez-vous à voix haute avec un proche\n• Arrivez 15 min en avance avec tous vos documents\n• Ne dites JAMAIS « pour avoir le passeport » ou « pour voyager »", emoji: "💡" },
];

const QUESTIONS = {
  perso: [
    { q: "Pourquoi voulez-vous être français(e) ?", r: "C'est LA question n°1 (posée dans quasiment 100% des entretiens). Parlez sincèrement de votre attachement à la France : vos valeurs partagées (liberté, égalité…), votre vie ici (travail, famille, amis), vos projets d'avenir. Ne récitez pas, soyez personnel. ⚠️ Ne dites JAMAIS « pour avoir le passeport » ou « pour voyager plus facilement »." },
    { q: "Pourquoi avez-vous choisi la France plutôt qu'un autre pays ?", r: "Expliquez ce qui vous a attiré : les opportunités, la qualité de vie, les valeurs républicaines, l'éducation, la culture, la liberté… Comparez positivement avec votre pays d'origine si c'est pertinent." },
    { q: "Auriez-vous les mêmes opportunités dans votre pays d'origine ?", r: "Question piège fréquente. Soyez diplomate : reconnaissez les qualités de votre pays d'origine, mais expliquez ce que la France vous apporte de plus (liberté, égalité des droits, protection sociale, laïcité…). Ne dénigrez pas votre pays." },
    { q: "Combien de fois par an rentrez-vous dans votre pays d'origine ?", r: "Répondez honnêtement, l'agent a accès à votre passeport. Expliquez les raisons (visites familiales, vacances…). Montrez que votre vie principale est bien en France." },
    { q: "Avez-vous de la famille dans votre pays d'origine ? Et en France ?", r: "Décrivez votre situation familiale dans les deux pays. Montrez que vos attaches principales (conjoint, enfants, amis proches) sont en France." },
    { q: "Envoyez-vous de l'argent à votre famille à l'étranger ?", r: "Répondez honnêtement. Ce n'est pas interdit. Si oui, expliquez que c'est un soutien familial normal, tout en montrant que vous êtes stable financièrement et que vous payez vos impôts en France." },
    { q: "Depuis combien de temps vivez-vous en France ? Racontez votre parcours.", r: "Donnez la date précise de votre arrivée. Racontez brièvement : pourquoi vous êtes venu(e), vos études, votre travail, votre installation progressive." },
    { q: "Quel est votre métier et votre situation professionnelle actuelle ?", r: "Décrivez votre emploi, le type de contrat (CDI, CDD…), votre entreprise, vos responsabilités. Montrez votre stabilité professionnelle." },
    { q: "Quels sont les noms et dates de naissance de vos enfants ? Où sont-ils scolarisés ?", r: "⚠️ Connaissez ces informations PAR CŒUR : noms, dates, classes, nom de l'école. L'agent vérifie que vous connaissez votre propre dossier." },
    { q: "Qu'est-ce que vous faites de votre temps libre ?", r: "Parlez de vos activités en France : sport, associations, bénévolat, sorties culturelles, cinéma, musées… Montrez que vous participez à la vie sociale française." },
    { q: "Ce que vous aimez et ce que vous aimez moins en France ?", r: "Soyez sincère mais positif. Ce que vous aimez : les valeurs, la culture, la gastronomie, la protection sociale… Ce que vous aimez moins : restez léger (la météo, la bureaucratie…). Ne critiquez JAMAIS les valeurs fondamentales." },
    { q: "Dans quelle ville, quel département et quelle région habitez-vous ?", r: "Vous DEVEZ connaître : votre commune, département (nom + numéro), région. Exemple : Cahors, dans le Lot (46), en Occitanie." },
    { q: "Connaissez-vous le nom de votre maire ? De votre préfet ?", r: "⚠️ Cherchez ces noms AVANT l'entretien sur le site de votre mairie et de votre préfecture. Question très fréquente qui montre votre intérêt pour votre territoire." },
    { q: "Êtes-vous prêt(e) à défendre la France si nécessaire ?", r: "Répondez OUI. Défendre la France, c'est aussi respecter les lois, payer ses impôts, voter, éduquer ses enfants dans les valeurs républicaines. Montrez votre engagement concret." },
    { q: "Quelles sont vos contributions à la société française ?", r: "Soyez concret : travail et cotisations sociales, impôts, éducation de vos enfants, bénévolat, vie associative, participation aux fêtes locales. Donnez des exemples précis." },
    { q: "Quelles villes de France avez-vous visitées ?", r: "Citez des villes que vous avez RÉELLEMENT visitées avec un souvenir ou détail pour chacune." },
  ],
  valeurs: [
    { q: "Quelle est la devise de la République française ?", r: "Liberté, Égalité, Fraternité." },
    { q: "Quelle est la quatrième valeur fondamentale de la République ?", r: "La LAÏCITÉ. Elle n'est pas dans la devise, mais c'est un principe fondamental inscrit dans l'article 1er de la Constitution : « La France est une République indivisible, laïque, démocratique et sociale. »" },
    { q: "Que signifie la LIBERTÉ ? Donnez un exemple concret.", r: "Le droit de faire tout ce qui ne nuit pas à autrui. Exemples : liberté d'expression (critiquer le gouvernement, une religion…), liberté de circuler, liberté de culte (pratiquer sa religion ou aucune), liberté de la presse, liberté d'association." },
    { q: "Que signifie l'ÉGALITÉ ? Donnez un exemple concret.", r: "Tous les citoyens sont égaux devant la loi, sans distinction d'origine, de sexe ou de religion. Exemples : même salaire homme-femme pour le même travail, accès à l'école publique gratuite pour tous, même justice pour tous." },
    { q: "Que signifie la FRATERNITÉ ? Donnez un exemple concret.", r: "La solidarité entre citoyens, l'entraide. Exemples : la Sécurité sociale (on cotise pour soigner tout le monde), les allocations chômage, les Restos du Cœur, le Secours populaire, l'aide aux personnes âgées." },
    { q: "Qu'est-ce que la laïcité ? Quelle est la date de la loi ?", r: "Séparation de l'État et des religions, loi du 9 décembre 1905. L'État ne favorise aucune religion, garantit la liberté de conscience et de culte, mais la religion reste dans la sphère privée. Les agents publics doivent être neutres. Autre loi importante : loi de 2004 (signes religieux ostensibles interdits à l'école publique)." },
    { q: "Faites la comparaison de la laïcité avec votre pays d'origine.", r: "Expliquez la différence : dans certains pays, la religion influence les lois ou l'État. En France, l'État est neutre et les lois sont les mêmes pour tous. Montrez que vous comprenez et adhérez à ce principe." },
    { q: "Qu'est-ce que la démocratie ?", r: "Régime politique où le pouvoir appartient au peuple. Les citoyens choisissent leurs représentants par le vote (suffrage universel). Les libertés fondamentales sont garanties. Personne n'est au-dessus de la loi." },
    { q: "Qu'est-ce que le blasphème ? Est-ce un délit en France ?", r: "NON, le blasphème n'est PAS un délit en France. On a le droit de critiquer, moquer ou caricaturer une religion. C'est protégé par la liberté d'expression. En revanche, l'incitation à la haine contre des personnes à cause de leur religion EST interdite." },
    { q: "Que signifient les couleurs du drapeau français ?", r: "Bleu et rouge = couleurs de Paris. Blanc = couleur historique du roi. Le drapeau tricolore symbolise l'union de la nation et de la monarchie lors de la Révolution." },
    { q: "Quels sont TOUS les symboles de la République française ?", r: "Le drapeau tricolore · La Marseillaise (hymne) · La devise « Liberté, Égalité, Fraternité » · Marianne (buste dans les mairies) · Le 14 juillet (fête nationale) · Le coq gaulois · Le faisceau de licteur · Le sceau de la République." },
    { q: "Qui est Marianne ? Que représente-t-elle ?", r: "Symbole de la République française. Représente la liberté, la démocratie et la République. Buste dans toutes les mairies. Visage sur les timbres-poste et pièces de monnaie." },
    { q: "Quel est l'hymne national français ? Que représente-t-il ?", r: "La Marseillaise, composée par Rouget de Lisle en 1792 à Strasbourg. Chant patriotique et révolutionnaire pour mobiliser les soldats pendant la Révolution. Hymne national depuis 1795." },
    { q: "Qu'est-ce que le 14 juillet ? Que commémore-t-on ?", r: "Fête nationale. Commémore la prise de la Bastille (14 juillet 1789) et la Fête de la Fédération (14 juillet 1790). Défilé militaire sur les Champs-Élysées et feux d'artifice dans toute la France." },
    { q: "Quelle est votre opinion sur la liberté d'expression ?", r: "Adhérez pleinement. Droit fondamental : chacun peut exprimer ses opinions, critiquer, débattre. Limitée par l'injure, la diffamation, l'incitation à la haine et le négationnisme." },
    { q: "Que pensez-vous de la presse satirique comme Charlie Hebdo ?", r: "En France, la presse satirique est protégée par la liberté d'expression et de la presse. On peut ne pas aimer, mais on respecte ce droit. On ne répond JAMAIS par la violence." },
    { q: "Qu'est-ce que l'État de droit ?", r: "Un système dans lequel l'État lui-même est soumis aux lois. Personne, même le Président, n'est au-dessus de la loi. Les citoyens sont protégés par des droits fondamentaux que l'État doit respecter." },
  ],
  societe: [
    { q: "Comment fonctionne la Sécurité sociale ?", r: "Système de protection sociale. Chaque salarié et employeur cotise (prélèvements sur le salaire). En échange : remboursement des frais médicaux, indemnités maladie, accident du travail, maternité, et retraites. C'est un pilier de la fraternité." },
    { q: "Existe-t-il uniquement la Sécurité sociale en France ?", r: "Non. En complément : les mutuelles/complémentaires santé, l'assurance chômage (France Travail), les allocations familiales (CAF), le RSA, les aides au logement (APL). La France a un système de protection très développé." },
    { q: "Qu'est-ce qu'un médecin traitant ? Pourquoi en déclarer un ?", r: "Le médecin traitant est votre médecin de référence. Vous devez en désigner un auprès de l'Assurance Maladie. Consulter un spécialiste sans passer par lui entraîne un remboursement réduit. C'est le parcours de soins coordonnés." },
    { q: "Comment déclare-t-on ses revenus en France ?", r: "Chaque année (mai-juin), vous devez déclarer vos revenus à l'administration fiscale (impôts). C'est obligatoire, même si vous ne payez pas d'impôt. La déclaration se fait en ligne sur impots.gouv.fr." },
    { q: "Quels sont les axes de l'égalité en France ?", r: "Égalité homme-femme · Égalité devant la loi (pas de discrimination) · Égalité d'accès à l'éducation · Égalité d'accès aux soins · Égalité des droits pour les personnes homosexuelles (mariage pour tous)." },
    { q: "L'égalité homme-femme est-elle appliquée dans votre travail ?", r: "Répondez par votre expérience. En France, la loi impose : même salaire pour même poste, interdiction de discriminer, congé paternité, lutte contre le harcèlement. Montrez que vous trouvez cela normal et positif." },
    { q: "En quelle année les femmes ont-elles obtenu le droit de voter en France ?", r: "En 1944 (ordonnance du 21 avril 1944 sous de Gaulle). Elles ont voté pour la première fois en 1945." },
    { q: "L'école est obligatoire à partir de quel âge ? Jusqu'à quel âge ?", r: "L'instruction est obligatoire de 3 ans à 16 ans. L'école publique est gratuite et laïque. C'est une obligation pour les parents de scolariser leurs enfants." },
    { q: "Qui a rendu l'école publique gratuite, laïque et obligatoire ?", r: "Jules Ferry, ministre de l'Instruction publique dans les années 1880. Lois de 1881 (gratuité) et 1882 (obligation et laïcité). Il est le père de l'école républicaine." },
    { q: "Si votre enfant souhaite manger du porc, quelle serait votre réaction ?", r: "⚠️ Question piège très courante ! En France, chacun est libre de manger ce qu'il veut. Vous respectez le choix de votre enfant. Pas de restriction alimentaire religieuse imposée." },
    { q: "Si votre fille joue à des jeux « de garçon » ou s'habille comme un garçon, que pensez-vous ?", r: "En France, il n'y a pas de jouets ou vêtements réservés à un sexe. Votre fille est libre de ses choix. L'égalité homme-femme = chacun vit comme il le souhaite." },
    { q: "Si votre fille souhaite se marier avec une fille, quelle serait votre position ?", r: "Le mariage homosexuel est un droit en France. Vous respectez ce droit. L'important est l'amour et le bonheur de votre enfant." },
    { q: "Quelle loi encadre le mariage homosexuel ? Qui l'a mis en place ? En quelle année ?", r: "Loi du 17 mai 2013, « Mariage pour tous ». Portée par Christiane Taubira (Garde des Sceaux), sous François Hollande. Couples de même sexe : mariage + adoption." },
    { q: "Que pensez-vous du voile dans le sport ?", r: "La laïcité s'applique dans les services publics et à l'école. Montrez que vous comprenez le principe de neutralité et respectez les règles françaises." },
    { q: "Quels sont les droits du citoyen français ?", r: "Droit de vote · Liberté d'expression · Liberté de religion · Droit à l'éducation · Droit au travail · Égalité devant la loi · Présomption d'innocence · Droit de grève · Droit d'asile." },
    { q: "Quels sont les devoirs du citoyen français ?", r: "Respecter les lois · Payer ses impôts · Participer à la défense du pays · Voter (devoir civique) · Scolariser ses enfants · Respecter les droits d'autrui · Faire sa journée défense et citoyenneté." },
    { q: "Peut-on porter un signe religieux dans une école publique ?", r: "NON (pour les signes ostensibles). La loi du 15 mars 2004 interdit le port de signes religieux ostensibles (voile, kippa, grande croix…) dans les écoles, collèges et lycées publics. Les signes discrets sont tolérés." },
    { q: "Citez les principaux jours fériés en France et ce qu'ils commémorent.", r: "1er janvier (Nouvel An) · Lundi de Pâques · 1er mai (Fête du travail) · 8 mai (Victoire 1945) · Ascension · Lundi de Pentecôte · 14 juillet (Fête nationale) · 15 août (Assomption) · 1er novembre (Toussaint) · 11 novembre (Armistice 1918) · 25 décembre (Noël)." },
  ],
  institutions: [
    { q: "Qui est le Président de la République actuellement ?", r: "Emmanuel Macron, élu en 2017, réélu en 2022 pour un second mandat de 5 ans." },
    { q: "Qui est le Premier ministre actuellement ?", r: "Sébastien Lecornu (depuis septembre 2025). Il réside à l'Hôtel Matignon." },
    { q: "Qui est le ministre de l'Intérieur actuellement ?", r: "Laurent Nunez (depuis février 2026). C'est le ministère qui gère la naturalisation, la police et les préfectures." },
    { q: "Quels sont les trois pouvoirs de la République ? Qui les exerce ?", r: "LÉGISLATIF (faire les lois) → le Parlement (Assemblée + Sénat). EXÉCUTIF (appliquer les lois) → le Président + le Gouvernement. JUDICIAIRE (juger) → les tribunaux et les juges." },
    { q: "Pourquoi y a-t-il trois pouvoirs séparés ?", r: "Pour éviter la dictature. Si une seule personne concentre tous les pouvoirs = dictature. La séparation garantit la démocratie. Principe de Montesquieu (philosophe des Lumières, XVIIIe siècle)." },
    { q: "C'est quoi le Parlement ? Quel est son rôle ?", r: "Deux chambres : Assemblée nationale (577 députés, élus pour 5 ans) + Sénat (348 sénateurs, élus pour 6 ans). Rôle : voter les lois et contrôler le gouvernement. Motion de censure possible." },
    { q: "Quelles sont les conditions pour voter en France ?", r: "Nationalité française · 18 ans révolus · Jouir de ses droits civiques · Être inscrit sur les listes électorales (en mairie ou en ligne)." },
    { q: "Qui réside au palais de l'Élysée ?", r: "Le Président de la République. Résidence officielle du chef de l'État, à Paris." },
    { q: "Qui réside à l'Hôtel Matignon ?", r: "Le Premier ministre. Résidence officielle du chef du gouvernement, à Paris." },
    { q: "Quel est le rôle du Président de la République ?", r: "Chef de l'État, garant de la Constitution, chef des armées. Nomme le Premier ministre, peut dissoudre l'Assemblée, représente la France à l'international. Mandat de 5 ans, renouvelable une seule fois." },
    { q: "Depuis quand les Français élisent-ils le Président au suffrage universel direct ?", r: "Depuis 1962 (réforme constitutionnelle sous de Gaulle). Avant, le Président était élu par un collège de grands électeurs." },
    { q: "Qu'est-ce que le Conseil constitutionnel ?", r: "Vérifie que les lois sont conformes à la Constitution. 9 membres nommés pour 9 ans. Peut censurer une loi votée par le Parlement." },
    { q: "Qui délivre la nationalité française ?", r: "Le ministère de l'Intérieur, par décret publié au Journal Officiel, après instruction par la préfecture." },
    { q: "Qu'est-ce qu'une commune, un département, une région ?", r: "Commune = plus petite division (dirigée par un maire). Département = conseil départemental. Région = plus grande collectivité territoriale. France = 18 régions, 101 départements." },
    { q: "Qu'est-ce que le suffrage universel ? Depuis quand existe-t-il ?", r: "Droit de vote pour tous les citoyens majeurs, sans distinction. Hommes : 1848. Femmes : 1944." },
    { q: "Qu'est-ce que la cohabitation ?", r: "Situation où le Président et le Premier ministre sont de partis politiques différents. Le Président nomme un PM issu de la majorité à l'Assemblée. Exemples : 1986-1988 (Mitterrand/Chirac), 1997-2002 (Chirac/Jospin)." },
  ],
  histoire: [
    { q: "Quelle est la date de la Révolution française ?", r: "1789. Prise de la Bastille : 14 juillet 1789." },
    { q: "C'est quoi la Bastille ? Pourquoi a-t-elle été prise ?", r: "Prison royale à Paris, symbole du pouvoir absolu du roi. Le peuple l'a prise car le roi pouvait emprisonner n'importe qui sans procès. Sa prise = début de la Révolution, fin de la monarchie absolue." },
    { q: "Qu'est-ce que la Déclaration des droits de l'homme et du citoyen ?", r: "Texte fondateur adopté le 26 août 1789. Droits fondamentaux : liberté, égalité, propriété, sûreté, résistance à l'oppression. Fait partie du bloc de constitutionnalité actuel." },
    { q: "Qui est Clovis ? Pourquoi est-il important ?", r: "Roi des Francs (vers 466-511). Premier roi franc à se convertir au christianisme (baptême vers 496 à Reims). Il a unifié les tribus franques et est considéré comme le fondateur du royaume de France." },
    { q: "Quelles sont les dates de la Première Guerre mondiale ?", r: "1914–1918. Armistice le 11 novembre 1918 (jour férié)." },
    { q: "Quelles sont les dates de la Seconde Guerre mondiale ?", r: "1939–1945. Occupation de la France : 1940-1944. Victoire le 8 mai 1945 (jour férié)." },
    { q: "Qui était Charles de Gaulle ?", r: "Général et homme d'État. Appel du 18 juin 1940 depuis Londres pour résister. Chef de la France Libre. Fondateur et 1er président de la Ve République (1958). Personnage majeur de l'histoire de France." },
    { q: "Qui est Jeanne d'Arc ?", r: "Héroïne du XVe siècle (1412-1431). A libéré Orléans des Anglais (guerre de Cent Ans) et fait sacrer Charles VII à Reims. Capturée, jugée pour hérésie, brûlée vive à Rouen. Symbole de courage et de patriotisme." },
    { q: "Qui est Napoléon Bonaparte et que lui doit-on ?", r: "Empereur des Français (1804-1815). On lui doit : le Code civil (base du droit actuel), les lycées, la Banque de France, la Légion d'honneur, l'organisation des préfets." },
    { q: "Dans quelle ville et quelle cathédrale les rois de France étaient-ils sacrés ?", r: "À la cathédrale Notre-Dame de Reims, en Champagne. Tradition depuis le baptême de Clovis (vers 496) jusqu'à Charles X (1825)." },
    { q: "Qu'est-ce que la Ve République ? Quand a-t-elle été fondée ?", r: "Régime politique actuel, fondé en 1958 par de Gaulle. Constitution du 4 octobre 1958." },
    { q: "Qui était Jean Moulin ?", r: "Grand résistant. A unifié la Résistance intérieure sous l'autorité de de Gaulle. Créateur du Conseil National de la Résistance (1943). Arrêté par la Gestapo, torturé, mort en 1943. Cendres transférées au Panthéon en 1964." },
    { q: "Qu'est-ce que le Panthéon ?", r: "Monument à Paris où reposent les grands personnages de l'histoire de France. Y sont enterrés notamment : Victor Hugo, Jean Moulin, Simone Veil, Marie Curie, Voltaire, Rousseau, Alexandre Dumas." },
    { q: "Qu'est-ce que les Lumières ?", r: "Mouvement philosophique du XVIIIe siècle qui prônait la raison, la science, la liberté et la tolérance. Principaux philosophes : Voltaire, Montesquieu, Rousseau, Diderot. Ils ont inspiré la Révolution française et la Déclaration des droits de l'homme." },
    { q: "Quel roi de France a été guillotiné pendant la Révolution ?", r: "Louis XVI, guillotiné le 21 janvier 1793 sur la place de la Révolution à Paris (actuelle place de la Concorde)." },
    { q: "Que commémore-t-on le 11 novembre ?", r: "L'armistice de 1918, fin de la Première Guerre mondiale. Jour férié, jour de mémoire." },
    { q: "Que commémore-t-on le 8 mai ?", r: "La victoire de 1945, fin de la Seconde Guerre mondiale en Europe. Jour férié." },
  ],
  geographie: [
    { q: "Citez les principaux fleuves de France.", r: "La Loire (le plus long, 1 012 km), la Seine (traverse Paris), le Rhône, la Garonne, le Rhin (frontière avec l'Allemagne)." },
    { q: "Quel fleuve traverse Paris ?", r: "La Seine." },
    { q: "Quels sont les 8 pays frontaliers de la France ? Citez-les.", r: "Belgique (nord), Luxembourg (nord-est), Allemagne (est), Suisse (est), Italie (sud-est), Monaco (sud-est), Espagne (sud-ouest), Andorre (sud-ouest)." },
    { q: "Quels sont les principaux massifs montagneux de France ?", r: "Les Alpes (Mont-Blanc, 4 809 m = point culminant), les Pyrénées, le Massif central, les Vosges, le Jura." },
    { q: "Quel est le nom de l'île française qui se trouve dans le sud-est du continent africain ?", r: "La Réunion (et Mayotte). La Réunion est un DROM dans l'océan Indien, à l'est de Madagascar." },
    { q: "Quels sont les territoires d'outre-mer français ?", r: "5 DROM : Guadeloupe, Martinique, Guyane, La Réunion, Mayotte. Autres COM : Polynésie française, Nouvelle-Calédonie, Wallis-et-Futuna, Saint-Pierre-et-Miquelon, Saint-Barthélemy, Saint-Martin." },
    { q: "Quelle est la capitale de la France ?", r: "Paris." },
    { q: "Citez les plus grandes villes de France.", r: "Paris, Marseille, Lyon, Toulouse, Nice, Nantes, Strasbourg, Montpellier, Bordeaux, Lille, Rennes." },
    { q: "Combien y a-t-il de départements en France ?", r: "101 : 96 en métropole + 5 outre-mer." },
    { q: "Combien y a-t-il de régions en France au total ?", r: "18 : 13 en métropole + 5 outre-mer." },
    { q: "Quelles mers et quels océans bordent la France ?", r: "Océan Atlantique (ouest), la Manche (nord), la mer Méditerranée (sud)." },
    { q: "Pourquoi la France est-elle surnommée « l'Hexagone » ?", r: "Parce que la forme de la France métropolitaine ressemble à un hexagone (figure à 6 côtés)." },
  ],
  culture: [
    { q: "Quelle personnalité française vous a marqué(e) ? Pourquoi ?", r: "⚠️ Préparez une réponse PERSONNELLE et sincère. Exemples : Victor Hugo, Simone Veil, Marie Curie, de Gaulle, Molière… Expliquez POURQUOI avec un vrai lien personnel." },
    { q: "Qui est Simone Veil ?", r: "Femme politique (1927-2017). Rescapée de la Shoah (Auschwitz). Ministre de la Santé : a fait voter la loi légalisant l'IVG en 1975. Présidente du Parlement européen. Au Panthéon depuis 2018." },
    { q: "Que pensez-vous de la loi Veil sur l'IVG ?", r: "Droit fondamental des femmes à disposer de leur corps. Avant 1975, les femmes mouraient d'avortements clandestins. En 2024, l'IVG a été inscrite dans la Constitution (1re mondiale)." },
    { q: "Qui est Simone de Beauvoir ?", r: "Écrivaine et philosophe (1908-1986), figure majeure du féminisme. Livre fondateur : « Le Deuxième Sexe » (1949). Phrase célèbre : « On ne naît pas femme, on le devient. » Compagne de Jean-Paul Sartre." },
    { q: "Qui est Victor Hugo ? Citez une de ses œuvres.", r: "Un des plus grands écrivains du XIXe siècle. Les Misérables, Notre-Dame de Paris. Défenseur de la justice sociale, opposé à la peine de mort. Enterré au Panthéon." },
    { q: "Qui est Marie Curie ?", r: "Physicienne d'origine polonaise, naturalisée française. 1re femme prix Nobel (physique 1903, chimie 1911). Découverte du radium et du polonium. 1re femme professeure à la Sorbonne. Au Panthéon." },
    { q: "Qui est Molière ?", r: "Dramaturge et comédien du XVIIe siècle, père de la comédie française. Œuvres : Le Malade imaginaire, L'Avare, Le Misanthrope, Le Bourgeois gentilhomme." },
    { q: "Qui est Voltaire ?", r: "Philosophe des Lumières (XVIIIe siècle). Défenseur de la liberté d'expression, de la tolérance et de la justice. A dénoncé l'esclavage et le fanatisme religieux. Enterré au Panthéon." },
    { q: "Citez un chanteur et une chanteuse français(e).", r: "Édith Piaf (La Vie en Rose), Charles Aznavour, Jacques Brel, Johnny Hallyday, France Gall, Claude François. Choisissez ceux que vous connaissez." },
    { q: "Quelles sont les spécialités culinaires de la France ?", r: "Gastronomie inscrite à l'UNESCO (2010). Fromages (camembert, roquefort, comté…), vins, baguette, croissants, foie gras, ratatouille, cassoulet, bouillabaisse, crêpes, macarons…" },
    { q: "Dans quels domaines la France est-elle reconnue dans le monde ?", r: "Gastronomie/vins · Mode/luxe (Chanel, Dior, Vuitton) · Culture (littérature, cinéma, musées) · Droits de l'homme · Aéronautique (Airbus) · Nucléaire civil · Tourisme (1er pays visité au monde)." },
    { q: "Citez un événement sportif célèbre en France.", r: "Le Tour de France (cyclisme), Roland-Garros (tennis), les 24h du Mans (automobile), le Marathon de Paris. L'équipe de France de football a gagné la Coupe du Monde en 1998 et 2018." },
    { q: "Qui sont les frères Lumière ?", r: "Auguste et Louis Lumière, inventeurs du cinématographe. Première projection publique de cinéma le 28 décembre 1895 à Lyon. Ils sont les pères du cinéma." },
    { q: "Citez un monument célèbre de France.", r: "Tour Eiffel, Louvre, Versailles, Mont-Saint-Michel, châteaux de la Loire, Notre-Dame de Paris, Arc de Triomphe." },
  ],
  actualite: [
    { q: "Qu'est-ce que l'affaire Charlie Hebdo ?", r: "7 janvier 2015 : attaque terroriste contre le journal satirique Charlie Hebdo (12 morts). Motif : caricatures. Marches républicaines massives (« Je suis Charlie »). Symbole de la liberté d'expression." },
    { q: "Que s'est-il passé le 13 novembre 2015 ?", r: "Attaques terroristes coordonnées à Paris : Bataclan, terrasses de cafés, Stade de France. 130 morts. Attentat le plus meurtrier de l'histoire de France." },
    { q: "Si un professeur montre une caricature qui vous choque, que faites-vous ?", r: "La caricature est protégée par la liberté d'expression. On peut être en désaccord mais on respecte ce droit. JAMAIS de violence. On discute calmement." },
    { q: "Qu'est-ce que la réforme des retraites de 2023 ?", r: "Âge légal de départ repoussé de 62 à 64 ans. A provoqué de grandes manifestations dans toute la France." },
    { q: "L'IVG est-elle un droit en France ?", r: "Oui. Loi Veil de 1975. En 2024, inscrite dans la Constitution (1re mondiale). Aucune loi future ne peut supprimer ce droit." },
    { q: "Quelle est la Grande cause nationale 2026 ?", r: "La santé mentale." },
    { q: "Citez un sujet de débat d'actualité en France.", r: "Pouvoir d'achat, conflit au Moyen-Orient, guerre en Ukraine, immigration, écologie, transition énergétique, sécurité, réformes sociales." },
  ],
  europe: [
    { q: "Qu'est-ce que l'Union européenne ?", r: "Organisation politique et économique de 27 pays, fondée pour la paix et la coopération après les guerres mondiales." },
    { q: "Combien de pays composent l'Union européenne aujourd'hui ?", r: "27 pays (depuis le Brexit / départ du Royaume-Uni en 2020)." },
    { q: "En quelle année le traité de Maastricht a-t-il été signé ? Que représente-t-il ?", r: "1992. Il marque la fondation de l'Union européenne telle qu'on la connaît (auparavant c'était la CEE). Il a aussi préparé la création de l'euro." },
    { q: "Décrivez le drapeau de l'Union européenne. Que représentent les 12 étoiles ?", r: "Fond bleu avec 12 étoiles dorées en cercle. ⚠️ Les 12 étoiles NE représentent PAS le nombre de pays ! Elles symbolisent l'unité, la solidarité et l'harmonie. Le chiffre 12 = symbole de perfection." },
    { q: "Où se trouvent les sièges des institutions européennes ?", r: "Conseil de l'UE → BRUXELLES (Belgique). Parlement européen → siège officiel à STRASBOURG (France), travaille aussi à Bruxelles. Commission européenne → BRUXELLES. Cour de justice de l'UE → LUXEMBOURG. Strasbourg = seule institution européenne ayant son siège en France !" },
    { q: "Quelle est la monnaie utilisée en France ?", r: "L'euro (€), adopté en 2002. Monnaie commune de 20 pays de la zone euro." },
    { q: "La Turquie fait-elle partie de l'Union européenne ?", r: "Non. Candidate depuis 1999, mais les négociations sont au point mort." },
    { q: "Qu'est-ce que l'ONU ? Quel est le rôle de la France ?", r: "Organisation des Nations Unies, créée en 1945 pour la paix mondiale. La France est l'un des 5 membres permanents du Conseil de sécurité (avec USA, Russie, Chine, Royaume-Uni) et dispose d'un droit de veto." },
    { q: "Que se passe-t-il en Ukraine depuis 2022 ?", r: "Février 2022 : invasion russe de l'Ukraine. La France soutient l'Ukraine via sanctions contre la Russie et aide militaire et humanitaire, dans le cadre de l'UE et de l'OTAN." },
  ],
};

const QUIZ_QUESTIONS = [
  { q: "Quelle est la date de la prise de la Bastille ?", options: ["14 juillet 1789", "14 juillet 1790", "4 août 1789", "26 août 1789"], correct: 0, correction: "La Bastille a été prise le 14 juillet 1789. C'est le début de la Révolution française et aujourd'hui la fête nationale." },
  { q: "Quelle est la devise de la République française ?", options: ["Liberté, Égalité, Justice", "Liberté, Égalité, Fraternité", "Liberté, Solidarité, Fraternité", "Paix, Égalité, Fraternité"], correct: 1, correction: "La devise est « Liberté, Égalité, Fraternité ». Elle est inscrite sur les bâtiments publics et les pièces de monnaie." },
  { q: "En plus de Liberté, Égalité et Fraternité, quelle est la 4e grande valeur de la République ?", options: ["La solidarité", "La démocratie", "La laïcité", "La justice"], correct: 2, correction: "La laïcité est la 4e valeur. Article 1er de la Constitution : « La France est une République indivisible, laïque, démocratique et sociale. »" },
  { q: "Combien y a-t-il de députés à l'Assemblée nationale ?", options: ["500", "577", "348", "650"], correct: 1, correction: "Il y a 577 députés à l'Assemblée nationale, élus au suffrage universel direct pour 5 ans. Le Sénat, lui, compte 348 sénateurs." },
  { q: "Qui réside à l'Hôtel Matignon à Paris ?", options: ["Le Président de la République", "Le Premier ministre", "Le Président du Sénat", "Le maire de Paris"], correct: 1, correction: "Le Premier ministre réside à Matignon. Le Président, lui, réside au palais de l'Élysée." },
  { q: "En quelle année les femmes ont-elles obtenu le droit de voter en France ?", options: ["1936", "1944", "1958", "1945"], correct: 1, correction: "Les femmes ont obtenu le droit de vote en 1944 (ordonnance du 21 avril), sous le général de Gaulle. Elles ont voté pour la première fois en 1945." },
  { q: "Depuis quelle année le mariage pour tous est-il autorisé en France ?", options: ["2010", "2013", "2015", "2008"], correct: 1, correction: "La loi du 17 mai 2013 autorise le mariage et l'adoption pour les couples de même sexe. Elle a été portée par Christiane Taubira sous François Hollande." },
  { q: "En quelle année a été votée la loi de séparation des Églises et de l'État ?", options: ["1901", "1905", "1789", "1946"], correct: 1, correction: "La loi du 9 décembre 1905 instaure la séparation des Églises et de l'État. C'est le texte fondateur de la laïcité en France." },
  { q: "Quel est le plus long fleuve de France ?", options: ["La Seine", "Le Rhône", "La Loire", "La Garonne"], correct: 2, correction: "La Loire est le plus long fleuve de France (1 012 km). La Seine traverse Paris, le Rhône passe par Lyon." },
  { q: "Combien de régions compte la France au total (métropole + outre-mer) ?", options: ["13", "18", "22", "15"], correct: 1, correction: "18 régions : 13 en métropole + 5 outre-mer (Guadeloupe, Martinique, Guyane, La Réunion, Mayotte)." },
  { q: "Qui est l'auteur du célèbre roman Les Misérables ?", options: ["Émile Zola", "Alexandre Dumas", "Victor Hugo", "Molière"], correct: 2, correction: "Victor Hugo, l'un des plus grands écrivains français du XIXe siècle. Il a aussi écrit Notre-Dame de Paris. Il est enterré au Panthéon." },
  { q: "Quel est le point culminant de la France et quelle est son altitude ?", options: ["Mont Ventoux (1 909 m)", "Mont Blanc (4 809 m)", "Pic du Midi (2 877 m)", "Puy de Sancy (1 886 m)"], correct: 1, correction: "Le Mont Blanc culmine à 4 809 mètres dans les Alpes. C'est aussi le plus haut sommet d'Europe occidentale." },
  { q: "En quelle année le droit à l'IVG a-t-il été inscrit dans la Constitution française ?", options: ["2020", "2023", "2024", "2022"], correct: 2, correction: "En 2024, la France est devenue le premier pays au monde à inscrire le droit à l'IVG dans sa Constitution. La loi Veil date de 1975." },
  { q: "Combien de pays sont actuellement membres de l'Union européenne ?", options: ["25", "28", "27", "30"], correct: 2, correction: "27 pays depuis le Brexit (départ du Royaume-Uni en 2020). Avant le Brexit, il y en avait 28." },
  { q: "Qui était le chef de la France Libre pendant la Seconde Guerre mondiale ?", options: ["Jean Moulin", "Charles de Gaulle", "Philippe Pétain", "Napoléon Bonaparte"], correct: 1, correction: "Charles de Gaulle. Il a lancé l'Appel du 18 juin 1940 depuis Londres. Jean Moulin a unifié la Résistance intérieure sous ses ordres." },
  { q: "Quel score minimum faut-il obtenir pour réussir l'examen civique de naturalisation en 2026 ?", options: ["70 %", "75 %", "80 %", "85 %"], correct: 2, correction: "Il faut 80 % minimum, soit 32 bonnes réponses sur 40. L'examen coûte 70 € et peut être repassé autant de fois que nécessaire." },
  { q: "Qu'est-ce que la Marseillaise ?", options: ["Un plat provençal", "L'hymne national français", "Un monument à Marseille", "Une danse traditionnelle"], correct: 1, correction: "La Marseillaise est l'hymne national, composé par Rouget de Lisle en 1792 à Strasbourg. Hymne officiel depuis 1795." },
  { q: "Qui a porté et défendu la loi du Mariage pour tous en 2013 ?", options: ["Simone Veil", "Christiane Taubira", "Simone de Beauvoir", "Élisabeth Borne"], correct: 1, correction: "Christiane Taubira, alors Garde des Sceaux (ministre de la Justice), sous la présidence de François Hollande." },
  { q: "Le blasphème est-il considéré comme un délit en France ?", options: ["Oui, c'est interdit par la loi", "Non, ce n'est pas un délit", "Seulement envers certaines religions", "Oui, depuis les attentats de 2015"], correct: 1, correction: "Non. En France, on a le droit de critiquer ou caricaturer une religion (liberté d'expression). Seule l'incitation à la haine contre des personnes est interdite." },
  { q: "Que représente Marianne, dont le buste se trouve dans toutes les mairies ?", options: ["La femme du Président", "La République française", "Une sainte catholique", "La première femme députée"], correct: 1, correction: "Marianne est le symbole de la République française. Elle représente la liberté et la démocratie. Son visage est aussi sur les timbres et pièces de monnaie." },
  { q: "Que représentent les 12 étoiles sur le drapeau de l'Union européenne ?", options: ["Les 12 pays fondateurs de l'UE", "Les 12 mois de l'année", "L'unité et la solidarité entre les peuples", "Les 12 apôtres"], correct: 2, correction: "Les 12 étoiles symbolisent l'unité, la solidarité et l'harmonie. Elles ne représentent PAS le nombre de pays ! Le 12 est un symbole de perfection." },
  { q: "Qui était Simone de Beauvoir et pourquoi est-elle célèbre ?", options: ["Ministre de la Santé", "Écrivaine et figure majeure du féminisme", "Résistante de la Seconde Guerre mondiale", "Scientifique prix Nobel"], correct: 1, correction: "Simone de Beauvoir (1908-1986) est une écrivaine et philosophe féministe. Son livre « Le Deuxième Sexe » (1949) est un texte fondateur du féminisme." },
  { q: "Dans quelle ville et quelle cathédrale les rois de France étaient-ils traditionnellement sacrés ?", options: ["À Paris, cathédrale Notre-Dame", "À Reims, cathédrale Notre-Dame de Reims", "À Versailles, chapelle royale", "À Saint-Denis, basilique royale"], correct: 1, correction: "À Reims, dans la cathédrale Notre-Dame de Reims, en Champagne. Tradition depuis le baptême de Clovis (vers 496) jusqu'à Charles X (1825)." },
  { q: "Quelle est la principale contribution de Napoléon Bonaparte encore en vigueur aujourd'hui ?", options: ["La Marseillaise", "Le Code civil", "La Déclaration des droits de l'homme", "La Sécurité sociale"], correct: 1, correction: "Le Code civil (1804), aussi appelé Code Napoléon. C'est la base du droit français actuel. Napoléon a aussi créé les lycées, la Banque de France et la Légion d'honneur." },
  { q: "Combien y a-t-il de pays frontaliers de la France ?", options: ["6 pays", "7 pays", "8 pays", "9 pays"], correct: 2, correction: "8 pays frontaliers : Belgique, Luxembourg, Allemagne, Suisse, Italie, Monaco, Espagne et Andorre." },
  { q: "Dans quelle ville française se trouve le siège officiel du Parlement européen ?", options: ["Bruxelles", "Luxembourg", "Strasbourg", "Paris"], correct: 2, correction: "Le siège officiel du Parlement européen est à Strasbourg (France). La Commission européenne et le Conseil de l'UE siègent à Bruxelles." },
  { q: "Qui a fait voter la loi légalisant l'IVG en France en 1975 ?", options: ["Simone de Beauvoir", "Simone Veil", "Christiane Taubira", "Élisabeth Borne"], correct: 1, correction: "Simone Veil, alors ministre de la Santé. En 2024, ce droit a été inscrit dans la Constitution. Simone Veil est entrée au Panthéon en 2018." },
  { q: "Comment la Sécurité sociale est-elle principalement financée en France ?", options: ["Par les impôts sur le revenu uniquement", "Par les cotisations des salariés et des employeurs", "Par des dons et des subventions", "Par l'Union européenne"], correct: 1, correction: "Par les cotisations sociales prélevées sur les salaires (part salarié + part employeur). C'est le principe de solidarité : chacun cotise selon ses moyens." },
  { q: "Qui a rendu l'école publique gratuite, laïque et obligatoire en France ?", options: ["Napoléon Bonaparte", "Jules Ferry", "Charles de Gaulle", "Victor Hugo"], correct: 1, correction: "Jules Ferry, ministre de l'Instruction publique. Lois de 1881 (gratuité) et 1882 (obligation + laïcité). Il est le père de l'école républicaine." },
  { q: "À partir de quel âge les enfants doivent-ils obligatoirement être scolarisés en France ?", options: ["3 ans", "5 ans", "6 ans", "4 ans"], correct: 0, correction: "Depuis la loi de 2019, l'instruction est obligatoire dès 3 ans (et jusqu'à 16 ans). Avant 2019, c'était à partir de 6 ans." },
  { q: "En quelle année le traité de Maastricht fondant l'Union européenne a-t-il été signé ?", options: ["1957", "1989", "1992", "2002"], correct: 2, correction: "Le traité de Maastricht a été signé en 1992. Il a fondé l'Union européenne et préparé la création de l'euro (mis en circulation en 2002)." },
  { q: "Quel philosophe des Lumières a théorisé la séparation des trois pouvoirs ?", options: ["Voltaire", "Rousseau", "Montesquieu", "Diderot"], correct: 2, correction: "Montesquieu, dans « De l'esprit des lois » (1748). Les 3 pouvoirs : législatif (Parlement), exécutif (Président + Gouvernement), judiciaire (tribunaux)." },
  { q: "Quels sont les trois pouvoirs séparés dans la République française ?", options: ["Militaire, religieux, civil", "Législatif, exécutif, judiciaire", "Présidentiel, parlementaire, municipal", "National, régional, local"], correct: 1, correction: "Législatif (faire les lois → Parlement), exécutif (appliquer les lois → Président + Gouvernement), judiciaire (juger → tribunaux). Séparés pour éviter la dictature." },
  { q: "Quel est le nom de l'île française située dans le sud-est du continent africain ?", options: ["La Martinique", "La Nouvelle-Calédonie", "La Réunion", "La Corse"], correct: 2, correction: "La Réunion, département et région d'outre-mer situé dans l'océan Indien, à l'est de Madagascar. Mayotte est aussi à proximité." },
  { q: "En quelle année la Ve République française a-t-elle été fondée ?", options: ["1945", "1958", "1968", "1789"], correct: 1, correction: "La Ve République a été fondée en 1958 par le général de Gaulle. La Constitution a été adoptée le 4 octobre 1958." },
  { q: "Depuis quand les Français élisent-ils le Président de la République au suffrage universel direct ?", options: ["1848", "1946", "1962", "1958"], correct: 2, correction: "Depuis 1962, suite à un référendum voulu par de Gaulle. Avant, le Président était élu par un collège de grands électeurs." },
  { q: "Qui était Jeanne d'Arc ?", options: ["Une reine de France", "Une héroïne qui a libéré Orléans et fait sacrer Charles VII", "La femme de Napoléon", "Une philosophe des Lumières"], correct: 1, correction: "Jeanne d'Arc (1412-1431), héroïne de la guerre de Cent Ans. Elle a libéré Orléans des Anglais et fait sacrer Charles VII à Reims. Brûlée vive à Rouen." },
  { q: "Combien y a-t-il de départements en France au total ?", options: ["96", "100", "101", "95"], correct: 2, correction: "101 départements : 96 en métropole + 5 outre-mer (Guadeloupe, Martinique, Guyane, La Réunion, Mayotte)." },
  { q: "Quel roi de France a été guillotiné pendant la Révolution française ?", options: ["Louis XIV", "Louis XV", "Louis XVI", "Louis XVIII"], correct: 2, correction: "Louis XVI, guillotiné le 21 janvier 1793 sur la place de la Révolution (actuelle place de la Concorde) à Paris." },
  { q: "Qui est le Président de la République française en 2026 ?", options: ["François Hollande", "Nicolas Sarkozy", "Emmanuel Macron", "Sébastien Lecornu"], correct: 2, correction: "Emmanuel Macron, élu en 2017 et réélu en 2022. Sébastien Lecornu est le Premier ministre (depuis septembre 2025)." },
  { q: "À quel âge peut-on voter en France ?", options: ["16 ans", "18 ans", "21 ans", "17 ans"], correct: 1, correction: "À 18 ans. Il faut être de nationalité française, majeur, jouir de ses droits civiques et être inscrit sur les listes électorales." },
  { q: "Peut-on porter un voile ou une kippa dans une école publique en France ?", options: ["Oui, c'est un droit", "Non, c'est interdit par la loi de 2004", "Seulement au lycée", "Seulement si c'est discret"], correct: 1, correction: "Non. La loi du 15 mars 2004 interdit le port de signes religieux ostensibles (voile, kippa, grande croix) dans les écoles, collèges et lycées publics." },
];

// --- App State ---
let currentTab = "info";
let searchTerm = "";
// Flashcard state
let fcIdx = 0, fcFlipped = false, fcKnown = 0, fcUnknown = 0, fcFinished = false, fcQuestions = [];
// Quiz state
let quizQuestions = [], quizCurrent = 0, quizSelected = null, quizScore = 0, quizAnswered = false, quizFinished = false;

function totalQCount() { return Object.values(QUESTIONS).reduce((s, a) => s + a.length, 0); }

function init() {
  document.getElementById("header-stats").textContent = `${totalQCount()}+ questions · ${QUIZ_QUESTIONS.length} quiz QCM · Mis à jour mai 2026`;
  renderTabs();
  renderContent();
}

function renderTabs() {
  const el = document.getElementById("tabs");
  el.innerHTML = CATEGORIES.map(cat =>
    `<button class="tab-btn${currentTab === cat.id ? " active" : ""}" onclick="switchTab('${cat.id}')">${cat.icon} ${cat.label}</button>`
  ).join("");
}

function switchTab(id) {
  currentTab = id;
  searchTerm = "";
  fcIdx = 0; fcFlipped = false; fcKnown = 0; fcUnknown = 0; fcFinished = false;
  fcQuestions = QUESTIONS[id] ? [...QUESTIONS[id]] : [];
  if (id === "quiz") initQuiz();
  renderTabs();
  renderSearchArea();
  renderContent();
}

function renderSearchArea() {
  const el = document.getElementById("search-area");
  if (currentTab === "info" || currentTab === "quiz") { el.innerHTML = ""; return; }
  const cat = CATEGORIES.find(c => c.id === currentTab);
  el.innerHTML = `<div class="search-wrap"><input class="search-input" type="text" placeholder="🔍 Rechercher dans « ${cat.label} »…" value="${escHtml(searchTerm)}" oninput="onSearch(this.value)" /></div>`;
}

function onSearch(val) {
  searchTerm = val;
  const cat = QUESTIONS[currentTab];
  if (!cat) return;
  const s = val.toLowerCase();
  fcQuestions = s ? cat.filter(q => q.q.toLowerCase().includes(s) || q.r.toLowerCase().includes(s)) : [...cat];
  fcIdx = 0; fcFlipped = false; fcKnown = 0; fcUnknown = 0; fcFinished = false;
  renderContent();
}

function renderContent() {
  const el = document.getElementById("content");
  if (currentTab === "info") { el.innerHTML = renderInfo(); return; }
  if (currentTab === "quiz") { el.innerHTML = renderQuiz(); return; }
  el.innerHTML = renderFlashCards();
}

function escHtml(s) { return s.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;"); }

function renderInfo() {
  return `<div class="info-hero"><h2>🇫🇷 Réforme 2026 — Ce qui change</h2><p>Depuis le 1er janvier 2026, les règles sont plus exigeantes. À lire en premier !</p></div>` +
    INFO_2026.map((item, i) =>
      `<details><summary><span style="font-size:18px">${item.emoji}</span> ${escHtml(item.title)}</summary><div class="detail-body">${escHtml(item.content)}</div></details>`
    ).join("");
}

function renderFlashCards() {
  const questions = fcQuestions;
  const total = questions.length;
  if (!total) return `<div class="no-results">Aucun résultat pour cette recherche.</div>`;
  if (fcFinished) {
    const pct = Math.round((fcKnown / total) * 100);
    const emoji = pct >= 80 ? "🎉" : pct >= 60 ? "👍" : "📚";
    return `<div class="result-box"><div class="result-emoji">${emoji}</div><h3>Résultat : ${pct}%</h3><p>✅ ${fcKnown} connues — ❌ ${fcUnknown} à revoir</p><button class="btn-restart" onclick="fcRestart()">Recommencer</button></div>`;
  }
  const card = questions[fcIdx];
  const cat = CATEGORIES.find(c => c.id === currentTab);
  const pctW = Math.round(((fcIdx + 1) / total) * 100);
  return `
    <div class="fc-meta"><span>${escHtml(cat?.label||"")} — ${fcIdx + 1} / ${total}</span><span>✅ ${fcKnown} ❌ ${fcUnknown}</span></div>
    <div class="progress-bar"><div class="progress-fill" style="width:${pctW}%"></div></div>
    <div class="card${fcFlipped ? " flipped" : ""}" onclick="fcFlip()">
      <div class="card-label">${fcFlipped ? "✅ Réponse" : "❓ Question — Touchez pour retourner"}</div>
      <p class="card-text">${escHtml(fcFlipped ? card.r : card.q)}</p>
    </div>
    ${fcFlipped ? `<div class="fc-btns"><button class="btn-unknown" onclick="fcNext(false)">❌ À revoir</button><button class="btn-known" onclick="fcNext(true)">✅ Connue !</button></div>` : ""}
  `;
}

function fcFlip() { fcFlipped = !fcFlipped; renderContent(); }
function fcNext(known) {
  if (known) fcKnown++; else fcUnknown++;
  fcFlipped = false;
  if (fcIdx < fcQuestions.length - 1) fcIdx++;
  else fcFinished = true;
  renderContent();
}
function fcRestart() { fcIdx = 0; fcFlipped = false; fcKnown = 0; fcUnknown = 0; fcFinished = false; renderContent(); }

function initQuiz() {
  quizQuestions = [...QUIZ_QUESTIONS].sort(() => Math.random() - 0.5).slice(0, 15);
  quizCurrent = 0; quizSelected = null; quizScore = 0; quizAnswered = false; quizFinished = false;
}

function renderQuiz() {
  if (quizFinished) {
    const pct = Math.round((quizScore / quizQuestions.length) * 100);
    const emoji = pct >= 80 ? "🏆" : pct >= 60 ? "👏" : "📖";
    const msg = pct >= 80 ? "Excellent ! Vous êtes prêt(e) !" : pct >= 60 ? "Bien, continuez à réviser." : "Courage, révisez encore !";
    return `<div class="result-box"><div class="result-emoji" style="font-size:56px">${emoji}</div><h3>${quizScore} / ${quizQuestions.length}</h3><p>${msg}</p><p style="color:#718096;font-size:13px;margin-bottom:20px">Rappel : examen civique = 80% minimum</p><button class="btn-restart" onclick="quizRestart()">Nouveau quiz</button></div>`;
  }
  const q = quizQuestions[quizCurrent];
  const pctW = Math.round(((quizCurrent + 1) / quizQuestions.length) * 100);
  const opts = q.options.map((opt, i) => {
    let cls = "quiz-opt";
    if (quizAnswered) {
      if (i === q.correct) cls += " correct";
      else if (i === quizSelected && i !== q.correct) cls += " wrong";
    }
    return `<button class="${cls}" onclick="quizSelect(${i})" ${quizAnswered ? "disabled" : ""}>${String.fromCharCode(65+i)}. ${escHtml(opt)}</button>`;
  }).join("");
  const correction = quizAnswered ? `
    <div class="quiz-correction">
      <div class="quiz-corr-label" style="color:${quizSelected===q.correct?"#38a169":"#e53e3e"}">${quizSelected===q.correct?"✅ Bonne réponse !":"❌ Mauvaise réponse"}</div>
      <p class="quiz-corr-text">${escHtml(q.correction)}</p>
    </div>
    <button class="quiz-next" onclick="quizNext()">${quizCurrent >= quizQuestions.length - 1 ? "Voir le résultat" : "Suivante →"}</button>
  ` : "";
  return `
    <div class="quiz-score"><span>Question ${quizCurrent+1}/${quizQuestions.length}</span><span>Score : ${quizScore}/${quizCurrent+(quizAnswered?1:0)}</span></div>
    <div class="progress-bar"><div class="progress-fill" style="width:${pctW}%"></div></div>
    <p class="quiz-q">${escHtml(q.q)}</p>
    <div class="quiz-opts">${opts}</div>
    ${correction}
  `;
}

function quizSelect(i) {
  if (quizAnswered) return;
  quizSelected = i;
  quizAnswered = true;
  if (i === quizQuestions[quizCurrent].correct) quizScore++;
  renderContent();
}
function quizNext() {
  if (quizCurrent >= quizQuestions.length - 1) { quizFinished = true; }
  else { quizCurrent++; quizSelected = null; quizAnswered = false; }
  renderContent();
}
function quizRestart() { initQuiz(); renderContent(); }

// Boot
switchTab("info");
</script>
</body>
</html>
