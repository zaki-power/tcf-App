import Q1Image from '../assets/qcm1-assets/Q1.jpg';
import Q51Image from '../assets/qcm1-assets/Q51.png';
import Q53Image from '../assets/qcm1-assets/Q53.png';
import Q54Image from '../assets/qcm1-assets/Q54.png';
import Q58Image from '../assets/qcm1-assets/Q58.png';

const RLTcf = [

  [
    {   
  id: 'RLTcf1Q01',
  questionType: 'COMPRÉHENSION ORALE',
  level: 'B2',
  Image : Q1Image, 
  question: "Écoutez les 4 propositions. Choisissez celle qui correspond à l'image et cliquez sur le bouton correspondant.",
    audioText: 'Écoutez les 4 propositions. Choisissez celle qui correspond à l’image.',
    reponses: [
      { id: 'a', text: 'C’est votre meilleur ami.', isCorrect: false },
      { id: 'b', text: 'C’est notre nouvelle maison.', isCorrect: true },
      { id: 'c', text: 'C’est ma grand-mère.', isCorrect: false },
      { id: 'd', text: 'C’est ton livre préféré.', isCorrect: false }
    ]
  },
  {   
    id: 'RLTcf1Q02',
    questionType: 'COMPRÉHENSION ORALE',
    level: 'A1',
    question: 'Écoutez le document sonore et la question. Choisissez la bonne réponse.',
    audioText: 'Bonjour Monsieur. Comment allez-vous aujourd’hui ?',
    reponses: [
      { id: 'a', text: 'Je suis à la mer.', isCorrect: false },
      { id: 'b', text: 'Je voyage en train.', isCorrect: false },
      { id: 'c', text: 'Je vais bien, merci.', isCorrect: true },
      { id: 'd', text: 'Je rentre bientôt.', isCorrect: false }
    ]
  },
  {   
    id: 'RLTcf1Q03',
    questionType: 'COMPRÉHENSION ORALE',
    level: 'A1',
    question: 'Écoutez le document sonore et la question. Choisissez la bonne réponse.',
    audioText: 'Qu’est-ce que tu prépares pour le dîner ?',
    reponses: [
      { id: 'a', text: 'Une tarte au fromage.', isCorrect: true },
      { id: 'b', text: 'Une brosse à dent.', isCorrect: false },
      { id: 'c', text: 'Un sac à dos.', isCorrect: false },
      { id: 'd', text: 'Un arc-en-ciel.', isCorrect: false }
    ]
  },
  {   
    id: 'RLTcf1Q04',
    questionType: 'COMPRÉHENSION ORALE',
    level: 'A2',
    question: 'Écoutez la question et les 4 réponses. Choisissez la réponse qui correspond à la question et cliquez sur le bouton correspondant',
    audioText: '– Demain, c’est l’anniversaire de ma mère.\n– Ah bon ? Et qu’est-ce que tu vas lui offrir comme cadeau ?',
    reponses: [
      { id: 'a', text: 'Réponse A', isCorrect: false },
      { id: 'b', text: 'Réponse B', isCorrect: false },
      { id: 'c', text: 'Réponse C ', isCorrect: false },
      { id: 'd', text: 'Réponse D', isCorrect: true }
    ]
  },
   {   
    id: 'RLTcf1Q05',
    questionType: 'COMPRÉHENSION ORALE',
    level: 'A2',
    question: 'Écoutez la question et les 4 réponses. Choisissez la réponse qui correspond à la question et cliquez sur le bouton correspondant',
    audioText: '– Salut Martin !\n– Salut Marie ! Quelle surprise, tu es encore ici ! Mais tu pars quand à Paris ?',
    reponses: [
      { id: 'a', text: 'Réponse A', isCorrect: false },
      { id: 'b', text: 'Réponse B', isCorrect: false },
      { id: 'c', text: 'Réponse C ', isCorrect: false },
      { id: 'd', text: 'Réponse D', isCorrect: true }
    ]
  },
  {   
  id: 'RLTcf1Q06',
  questionType: 'COMPRÉHENSION ORALE',
  level: 'B2',
  question: 'Écoutez le document sonore et la question. Choisissez la bonne réponse.',
    audioText: 'Aujourd’hui, dans la capitale, il fait beau et chaud avec une température de 26 degrés. Demain, le ciel va être couvert de nuages, mais il n’y aura pas de pluie. Après-demain, les températures seront plus fraîches à cause du vent.',
    reponses: [
      { id: 'a', text: 'Il y a des nuages.', isCorrect: false },
      { id: 'b', text: 'Il y a du soleil.', isCorrect: true },
      { id: 'c', text: 'Il y a de la pluie.', isCorrect: false },
      { id: 'd', text: 'Il y a du vent.', isCorrect: false }
    ]
  },
  {   
  id: 'RLTcf1Q07',
  questionType: 'COMPRÉHENSION ORALE',
  level: 'A2',
  question: 'Écoutez le document sonore et la question. Choisissez la bonne réponse.',
    audioText: '– Pourquoi tu es si excité Thomas ?\n– C’est le plus beau jour de ma vie ! Je viens de gagner un gros lot à la loterie !',
    reponses: [
      { id: 'a', text: 'Il est malade.', isCorrect: false },
      { id: 'b', text: 'Il est triste.', isCorrect: false },
      { id: 'c', text: 'Il est fatigué.', isCorrect: false },
      { id: 'd', text: 'Il est heureux.', isCorrect: true }
    ]
  },
  {   
  id: 'RLTcf1Q08',
  questionType: 'COMPRÉHENSION ORALE',
  level: 'A2',
  question: 'Écoutez le document sonore et la question. Choisissez la bonne réponse.',
    audioText: 'Du 4 au 24 juin, CHIC VOYAGE vous propose un jeu concours qui vous permet de gagner un week-end de 3 jours dans une destination de rêve ! Le principe du jeu est simple : il suffit de retrouver sur une carte les plus prestigieux châteaux de France ! Pour participer, rendez-vous dès maintenant sur notre site web !',
    reponses: [
      { id: 'a', text: 'A la télévision.', isCorrect: false },
      { id: 'b', text: 'Par téléphone.', isCorrect: false },
      { id: 'c', text: 'Sur place.', isCorrect: false },
      { id: 'd', text: 'Sur Internet.', isCorrect: true }
    ]
  },
  {   
  id: 'RLTcf1Q09',
  questionType: 'COMPRÉHENSION ORALE',
  level: 'B1',
  question: 'Écoutez le document sonore et la question. Choisissez la bonne réponse.',
    audioText: '– Alors Jean, tu as un nouveau travail ? Tu es toujours dans la presse ?\n– Non, je ne suis plus journaliste, c’était temporaire, j’ai complètement changé. Je travaille comme traducteur maintenant. C’était mon rêve, depuis toujours ! Tu sais que j’ai fait des études de traduction et d’interprétation ?\n– Non, je ne savais pas. Je croyais que tu voulais te lancer dans l’immobilier un jour. Et dis-moi, dans quelle langue tu travailles ?\n– En anglais parfois, mais mon principal client est un industriel allemand, je travaille donc souvent sur des textes en allemand.',
    reponses: [
      { id: 'a', text: 'Il est journaliste.', isCorrect: false },
      { id: 'b', text: 'Il est traducteur.', isCorrect: true },
      { id: 'c', text: 'Il est industriel.', isCorrect: false },
      { id: 'd', text: 'Il est agent immobilier.', isCorrect: false }
    ]
  },
  {   
  id: 'RLTcf1Q10',
  questionType: 'COMPRÉHENSION ORALE',
  level: 'B1',
  question: 'Écoutez le document sonore et la question. Choisissez la bonne réponse.',
    audioText: '– Sophie, tu arrives toujours en retard !\n– Ah mais cette fois, j’ai vraiment une bonne excuse ! J’ai eu un accident de voiture, il y a une heure, au milieu d’un carrefour… J’étais dans mes pensées, je n’ai pas vu le feu rouge et après… Quel stress ! Heureusement, personne n’est blessé.\n– Mais qu’est-ce que tu racontes ?! Tu as de la chance, dis donc ! Je sais que tu as souvent la tête dans la lune, mais tu dois faire attention quand tu roules !',
    reponses: [
      { id: 'a', text: 'Parce qu’elle était stressée.', isCorrect: false },
      { id: 'b', text: 'Parce qu’elle était fatiguée.', isCorrect: false },
      { id: 'c', text: 'Parce qu’elle était pressée.', isCorrect: false },
      { id: 'd', text: 'Parce qu’elle était distraite.', isCorrect: true }
    ]
  },
  {   
  id: 'RLTcf1Q11',
  questionType: 'COMPRÉHENSION ORALE',
  level: 'B1',
  question: 'Écoutez le document sonore et la question. Choisissez la bonne réponse.',
    audioText: 'Les agriculteurs, les tribunaux ou les asiles psychiatriques... Raymond Depardon est habitué à montrer ou à donner la parole aux Français. Dans son dernier documentaire, 12 jours, présenté lors du dernier festival de Cannes, et qui sort mercredi dans les salles, il s\'intéresse aux personnes placées en hôpital psychiatrique contre leur volonté. Il filme encore les visages d\'une France oubliée, peu médiatisée, confirmant son goût pour les anonymes. Avec 12 jours, il a voulu faire « un portrait de la France actuelle d\'une incroyable réalité ».\n(D’après un article publié sur www.francetvinfo.fr le 29.11.2017)',
    reponses: [
      { id: 'a', text: 'Un film documentaire.', isCorrect: true },
      { id: 'b', text: 'Un film dramatique.', isCorrect: false },
      { id: 'c', text: 'Un film comique.', isCorrect: false },
      { id: 'd', text: 'Un film policier.', isCorrect: false }
    ]
  },
    {   
  id: 'RLTcf1Q12',
  questionType: 'COMPRÉHENSION ORALE',
  level: 'B1',
  question: 'Écoutez le document sonore et la question. Choisissez la bonne réponse.',
    audioText: 'Il faut dire que la saison 2017 de Cristiano Ronaldo a une nouvelle fois été marquée par d’excellents résultats. Cette année, il a en effet remporté la Ligue des Champions, ainsi que le championnat d’Espagne et les Supercoupes d’Europe et d’Espagne. L’attaquant portugais a donc été sacré meilleur joueur européen de la saison, grâce notamment à ses douze buts en Ligue des Champions. En sélection, les résultats sont tout aussi positifs : le Portugal s’est brillamment qualifié pour la Coupe du monde 2018. Le capitaine de la sélection portugaise, sacrée championne d’Europe l’an passé, a marqué onze buts en autant de rencontres officielles.\n(D’après un article publié sur www.sport.francetvinfo.fr le 07.12.2017)',
    reponses: [
      { id: 'a', text: 'En Coupe du monde.', isCorrect: false },
      { id: 'b', text: 'En Supercoupe d’Europe.', isCorrect: false },
      { id: 'c', text: 'En Championnat d’Espagne.', isCorrect: false },
      { id: 'd', text: 'En Ligue des Champions.', isCorrect: true }
    ]
  },
  {   
  id: 'RLTcf1Q13',
  questionType: 'COMPRÉHENSION ORALE',
  level: 'B1',
  question: 'Écoutez le document sonore et la question. Choisissez la bonne réponse.',
    audioText: '« Tout passe, tout finit, tout disparaît. Et moi qui m\'imaginais devoir vivre toujours, qu\'est-ce que je deviens ? » La fille de Jean d\'Ormesson a présenté, jeudi 7 décembre, dans l\'émission La Grande librairie sur France 5, ces dernières phrases écrites par l\'écrivain et académicien. Emue aux larmes, Héloïse d\'Ormesson a confié le document au présentateur François Busnel pour qu\'il le lise.\n« Mais que je sois passé sur et dans ce monde où vous avez vécu est une vérité et une beauté pour toujours et la mort elle-même ne peut rien contre moi », a écrit Jean d\'Ormesson, samedi, trois jours avant sa mort.\n(D’après un article publié sur www.francetvinfo.fr le 08.12.2017)',
    reponses: [
      { id: 'a', text: 'La femme d’un journaliste.', isCorrect: false },
      { id: 'b', text: 'Une critique littéraire.', isCorrect: false },
      { id: 'c', text: 'La fille d’un académicien.', isCorrect: true },
      { id: 'd', text: 'Une femme de lettres.', isCorrect: false }
    ]
  },
  {   
  id: 'RLTcf1Q14',
  questionType: 'COMPRÉHENSION ORALE',
  level: 'B1',
  question: 'Écoutez le document sonore et la question. Choisissez la bonne réponse.',
    audioText: 'Et voici un petit rappel pour savoir comment on vote en France ! L’élection se déroule dans un bureau de vote, installé par exemple dans les mairies ou les écoles. Pour voter, il faut que la personne montre sa carte d’identité et, si elle le souhaite, sa carte d’électeur. Elle prend les bulletins de vote avec le nom du candidat et une enveloppe, et se rend dans l’isoloir pour mettre dans cette enveloppe le bulletin du candidat qu’elle a choisi. Le vote est secret. Elle glisse ensuite son enveloppe dans une urne transparente et signe le registre en face de son nom. On ne peut voter qu’une seule fois.\n(D’après un article publié sur www.humanite.fr le 16.06.2017)',
    reponses: [
      { id: 'a', text: 'Un bureau de vote.', isCorrect: false },
      { id: 'b', text: 'Une carte d’identité.', isCorrect: true },
      { id: 'c', text: 'Une carte d’électeur.', isCorrect: false },
      { id: 'd', text: 'Un bulletin de vote.', isCorrect: false }
    ]
  },
  {
    id: 'RLTcf1Q15',
    questionType: 'COMPRÉHENSION ORALE',
    level: 'B1',
    question: 'Écoutez le document sonore et la question. Choisissez la bonne réponse.',
    audioText: '— Hôtel du Globe, bonjour.\n— Bonjour Monsieur. C’est Paulin Leroux à l’appareil. C’est à propos de ma réservation.\n— Oui, Monsieur, comment puis-je vous aider ?\n— Eh bien, j’ai réservé une chambre simple pour le jeudi 12 juillet, mais j’ai eu un imprévu et maintenant je dois changer.\n— Vous voulez changer la date ?\n— Oui, exactement. Finalement, je voudrais venir le lendemain, le vendredi 13 juillet. Est-ce que c’est possible ?\n— Malheureusement, Monsieur, pour cette date, toutes nos chambres simples sont déjà réservées. Ce que je peux vous proposer par contre, c’est une chambre double, mais son prix est plus élevé.\n— Ah bon ? Vous êtes déjà pleins ? Je n’aurais pas pensé…\n— Eh oui Monsieur, c’est la haute saison, et il y a beaucoup de touristes cette année.\n— Bon, je comprends, mais je dois voir encore… je vous appellerai ce soir pour vous confirmer mon arrivée, d’accord ?\n— D’accord Monsieur.\n— Merci beaucoup. Bonne journée.\n— Je vous en prie. Bonne journée à vous aussi.',
    reponses: [
      { id: 'a', text: 'Pour faire une réservation.', isCorrect: false },
      { id: 'b', text: 'Pour annuler sa réservation.', isCorrect: false },
      { id: 'c', text: 'Pour modifier sa réservation.', isCorrect: true },
      { id: 'd', text: 'Pour confirmer sa réservation.', isCorrect: false }
    ]
  },
  {
    id: 'RLTcf1Q16',
    questionType: 'COMPRÉHENSION ORALE',
    level: 'B2',
    question: 'Écoutez le document sonore et la question. Choisissez la bonne réponse.',
    audioText: 'Le patrimoine mondial de l’UNESCO ou patrimoine de l’humanité, c’est une liste élaborée par l’UNESCO qui est, rappelons-le, l’institution de l’ONU chargée de l’éducation, des sciences et de la culture. Son but, c’est de préserver et de transmettre ce patrimoine aux générations futures. Pour figurer sur la liste, les sites doivent avoir une valeur exceptionnelle, une valeur universelle. Il y a deux grandes familles dans les sites de l’UNESCO, culturelles et naturelles. Dans le monde actuellement, il y a 1031 sites classés : 802 sont culturels, 197 sont naturels et puis 32 sont mixtes. Exemple de site culturel : la Grande Muraille de Chine ; site naturel : le Grand Canyon aux États-Unis ; site mixte : le mont Athos en Grèce avec la montagne et les monastères.',
    reponses: [
      { id: 'a', text: 'Elle valorise le patrimoine culturel des pays développés.', isCorrect: false },
      { id: 'b', text: 'Elle protège aussi bien des sites culturels que naturels.', isCorrect: true },
      { id: 'c', text: 'Elle transmet une vision nouvelle des espaces naturels.', isCorrect: false },
      { id: 'd', text: 'Elle classe les pays selon la qualité de leur patrimoine.', isCorrect: false }
    ]
  },

  {   
  id: 'RLTcf1Q17',
  questionType: 'COMPRÉHENSION ORALE',
  level: 'B2',
  question: 'Écoutez le document sonore et la question. Choisissez la bonne réponse.',
    audioText: 'De nombreux paramètres du sommeil sont perturbés les nuits de pleine lune. Ce sont des chercheurs suisses de l’université de Bâle qui ont fait la découverte. Des volontaires ont passé 64 nuits à dormir dans une chambre isolée du monde extérieur, sans bruit et sans lumière. Leur électroencéphalogramme a révélé que le sommeil profond est raccourci de 30 % quand la lune est pleine. Le sommeil lui-même dure moins longtemps et sa qualité est jugée moins bonne. Il a aussi été constaté que pendant une nuit de pleine lune les sécrétions de mélatonine, une hormone liée au sommeil, sont plus basses. Les chercheurs pensent que nous avons peut-être une horloge biologique calée sur le cycle de la lune.',
    reponses: [
      { id: 'a', text: 'Les nuits sans lune sont courtes et difficiles.', isCorrect: false },
      { id: 'b', text: 'La lumière et le bruit favorisent le sommeil.', isCorrect: false },
      { id: 'c', text: 'L’activité humaine perturbe le cycle de la lune.', isCorrect: false },
      { id: 'd', text: 'La pleine lune provoque des troubles du sommeil.', isCorrect: true }
    ]
  },
  {   
  id: 'RLTcf1Q18',
  questionType: 'COMPRÉHENSION ORALE',
  level: 'B2',
  question: 'Écoutez le document sonore et la question. Choisissez la bonne réponse.',
    audioText: 'La licence « Langues, Littératures, Civilisations Étrangères » s’organise en trois spécialités : LLCE études anglophones, LLCE espagnol et LLCE anglais-espagnol. La licence LLCE études anglophones met l’accent sur la langue anglaise, l’étude de la littérature et des civilisations britanniques, américaines et postcoloniales. L’expression orale et les techniques de traduction sont privilégiées.',
    reponses: [
      { id: 'a', text: 'Un exposé de linguistique anglaise.', isCorrect: false },
      { id: 'b', text: 'Un diplôme d’études universitaires.', isCorrect: true },
      { id: 'c', text: 'Une méthode d’apprentissage des langues.', isCorrect: false },
      { id: 'd', text: 'Un examen d’histoire de la littérature.', isCorrect: false }
    ]
  },
  {   
  id: 'RLTcf1Q19',
  questionType: 'COMPRÉHENSION ORALE',
  level: 'B2',
  question: 'Écoutez le document sonore et la question. Choisissez la bonne réponse.',
    audioText: 'On tourne une page de l’histoire ferroviaire française : la SNCF stoppe ce samedi les trains de nuit entre Paris et Nice. À l’origine, il y a 127 ans, ce train reliait Calais à Rome. Selon le gouvernement précédent, la fréquentation et la rentabilité en baisse ont eu la peau de ces trajets et aucun repreneur privé ne s’est déclaré après l’ouverture à la concurrence. Pourtant, le taux de remplissage est de plus de 60 %, les wagons sont souvent complets le week-end. L’arrêt de la ligne va faire des malheureux.',
    reponses: [
      { id: 'a', text: 'Elle constitue la plus ancienne ligne ferroviaire d’Europe.', isCorrect: false },
      { id: 'b', text: 'Elle sera bientôt reprise par des investisseurs privés.', isCorrect: false },
      { id: 'c', text: 'Elle n’est plus suffisamment fréquentée le week-end.', isCorrect: false },
      { id: 'd', text: 'Elle va prochainement effectuer son dernier trajet.', isCorrect: true }
    ]
  },
  {   
  id: 'RLTcf1Q20',
  questionType: 'COMPRÉHENSION ORALE',
  level: 'B2',
  question: 'Écoutez le document sonore et la question. Choisissez la bonne réponse.',
    audioText: 'Les producteurs d’olives s’inquiètent, une bactérie qui a dévasté les plantations dans le sud de l’Italie commence à s’étendre à la France. Pour l’instant, les productions de Corse et de région PACA sont épargnées, mais Anja Vogel, dix ministres européens étaient réunis à Paris, aujourd’hui, pour renforcer leur plan d’action contre cette bactérie qui pullule. Oui, on l’appelle « la bactérie tueuse d’oliviers », mais la Xylella Fastidiosa est nuisible pour bien d’autres végétaux. La Commission a identifié plus de 200 espèces sensibles, comme la vigne, le laurier rose ou l’amandier, qui dépérissent en desséchant de l’intérieur. Apparue en 2013 dans le sud de l’Italie, elle a été particulièrement virulente dans les Pouilles où elle a décimé les plantations d’oliviers.',
    reponses: [
      { id: 'a', text: 'Elle s’attaque exclusivement aux plantations d’oliviers.', isCorrect: false },
      { id: 'b', text: 'Elle menace de nombreuses espèces végétales.', isCorrect: true },
      { id: 'c', text: 'Elle dévaste la biodiversité en Italie et en France.', isCorrect: false },
      { id: 'd', text: 'Elle est protégée par la Commission européenne.', isCorrect: false }
    ]
  },
  {   
  id: 'RLTcf1Q21',
  questionType: 'COMPRÉHENSION ORALE',
  level: 'B2',
  question: 'Écoutez le document sonore et la question. Choisissez la bonne réponse.',
    audioText: 'Ben vous, vous le savez, vous avez connu les changements de la société en 50 ans, en France. On en parle dans « La minute conso » d’ailleurs. C’est gentil… Effectivement, aujourd’hui on téléphone partout avec son portable, nos modes de vie ont bien changé en 50 ans, chiffres à l’appui, il y a une étude qui fait le point sur nos pratiques de consommation et leur impact. Qu’est-ce qui faut en retenir, Mélodie Pépin ? Qu’on dépense trois fois plus qu’avant. En moyenne par an, un Français dépense 17 000 euros contre 5 300 euros en 1960. Alors oui, ça paraît énorme mais si on regarde les salaires, prenons le SMIC, il a été multiplié par 30 en 50 ans. De nouvelles dépenses sont apparues aussi, les portables, Internet, les nouvelles technologies, ça a explosé depuis les années 90, même si bien sûr c’est le loyer qui reste la première des dépenses, suivi de l’alimentation, l’alimentation qui est un budget en baisse.',
    reponses: [
      { id: 'a', text: 'L’évolution des habitudes de consommation des Français.', isCorrect: true },
      { id: 'b', text: 'Le développement considérable de l’économie française.', isCorrect: false },
      { id: 'c', text: 'L’impact du téléphone portable sur la vie des Français.', isCorrect: false },
      { id: 'd', text: 'La hausse des inégalités sociales dans la société française.', isCorrect: false }
    ]
  },
    {   
  id: 'RLTcf1Q22',
  questionType: 'COMPRÉHENSION ORALE',
  level: 'C1',
  question: 'Écoutez le document sonore et la question. Choisissez la bonne réponse.',
    audioText: 'Clémence, on termine avec un roman étonnant, Une toile large comme le monde d’Aude Seigne, aux éditions ZOE, et ce roman nous parle du web… Le personnage principal, ou la toile de fond, c’est Internet. Tous les personnages travaillent, ou sont confrontés, ou en tout cas à un moment dans leur vie prennent conscience qu’ils ne peuvent pas vivre sans Internet, et cela leur pose problème. On va suivre une poignée de personnages, répartis dans le monde, qui à un moment donné se posent la question de : « Quelle est l’importance, l’influence d’Internet dans ma vie et n’aurais-je pas envie d’en sortir et si j’en sortais, quelles seraient les conséquences ? » Et c’est un roman très didactique, voilà, qui explique pas mal de choses sur Internet et ses conséquences.',
    reponses: [
      { id: 'a', text: 'Il nous apprend à vivre et à travailler sans Internet.', isCorrect: false },
      { id: 'b', text: 'Il nous explique comment Internet a détruit nos vies.', isCorrect: false },
      { id: 'c', text: 'Il nous montre comment Internet nous rend plus libre.', isCorrect: false },
      { id: 'd', text: 'Il nous permet de réfléchir à nos usages d’Internet.', isCorrect: true }
    ]
  },
  {   
  id: 'RLTcf1Q23',
  questionType: 'COMPRÉHENSION ORALE',
  level: 'C1',
  question: 'Écoutez le document sonore et la question. Choisissez la bonne réponse.',
    audioText: 'À partir de demain, un décret va obliger les médias à signaler au public les retouches qui auront été faites sur les photos qu’ils publient. On en parle ce matin dans « C’est dans ma tête » avec la psychanalyste Claude Halmos. Bonjour Claude. Bonjour. Pensez-vous qu’une telle mesure puisse avoir une réelle importance sur le plan psychologique ? Je crois que cette mesure est importante mais qu’elle le sera surtout si les médias ne se contentent pas de l’appliquer mais l’expliquent. Alors, pourquoi est-elle importante ? Mais parce que ces photos ont pour les hommes et les femmes adultes, sans qu’ils s’en rendent forcément compte d’ailleurs, valeur de norme, et ce n’est pas anodin, notamment parce que cette dictature des images induit l’idée qu’il n’y aurait qu’une seule sorte de beauté, celle qu’elle montre. Mais c’est plus problématique encore pour les adolescents parce que ces photos leur apparaissent souvent comme des modèles auxquels ils croient devoir ressembler et ça peut avoir des conséquences graves.',
    reponses: [
      { id: 'a', text: 'Les photographies peuvent avoir un impact psychologique sur le public.', isCorrect: true },
      { id: 'b', text: 'Les médias offrent généralement une image dégradée de l’adolescence.', isCorrect: false },
      { id: 'c', text: 'La beauté doit être définie selon une norme claire et partagée par tous.', isCorrect: false },
      { id: 'd', text: 'Le manque de psychologie des médias est problématique, voire choquant.', isCorrect: false }
    ]
  },
  {   
  id: 'RLTcf1Q24',
  questionType: 'COMPRÉHENSION ORALE',
  level: 'C1',
  question: 'Écoutez le document sonore et la question. Choisissez la bonne réponse.',
    audioText: 'Je suis très frappée que ces dernières années, depuis dix ans, quinze ans, les gens utilisent plus volontiers le mot décéder que le mot mourir. Et ce déni de la mort qui marque nos sociétés récentes fait que dans le vocabulaire, il y a cette transformation : les gens disent décéder, partir, ils utilisent des euphémismes pour ne pas affronter le mot et donc la chose de la mort. Et voilà, et donc c’est un mot que je déteste pour cette raison-là, parce que c’est un euphémisme, c’est une peur, c’est un mot qui révèle une peur.',
    reponses: [
      { id: 'a', text: 'Une évolution linguistique qu’elle cautionne.', isCorrect: false },
      { id: 'b', text: 'Une difficulté lexicale qu’elle partage.', isCorrect: false },
      { id: 'c', text: 'Un phénomène social qu’elle déplore.', isCorrect: true },
      { id: 'd', text: 'Une notion philosophique qu’elle redoute.', isCorrect: false }
    ]
  },
  {   
  id: 'RLTcf1Q25',
  questionType: 'COMPRÉHENSION ORALE',
  level: 'C1',
  question: 'Écoutez le document sonore et la question. Choisissez la bonne réponse.',
    audioText: 'Pour le coup je suis un enfant de la région de Strasbourg, donc pour moi l’Europe c’est aussi cette dimension en tout cas de réconciliation entre les deux rives du Rhin. J’ai fait un Erasmus, donc j’étais en mobilité, j’ai appris la langue du voisin, j’ai fait de nombreux échanges, j’ai pu voyager, profiter de la libre circulation, donc c’est toute une série de choses concrètes l’Europe aujourd’hui, et on oublie bien souvent que c’est dû à la construction européenne et au projet européen.',
    reponses: [
      { id: 'a', text: 'Pour inciter les jeunes à plus d’échanges et de mobilité.', isCorrect: false },
      { id: 'b', text: 'Pour défendre les bienfaits de la cause européenne.', isCorrect: true },
      { id: 'c', text: 'Pour témoigner des difficultés à vivre en zone frontalière.', isCorrect: false },
      { id: 'd', text: 'Pour louer les charmes de sa région et de sa ville natales.', isCorrect: false }
    ]
  },
  {   
  id: 'RLTcf1Q26',
  questionType: 'COMPRÉHENSION ORALE',
  level: 'C1',
  question: 'Écoutez le document sonore et la question. Choisissez la bonne réponse.',
    audioText: 'Bonjour Dominique ! Bonjour Mathieu. Savez-vous ce qu’est une croisière de porcelaine ? Non, mais vous allez nous le dire… Eh bien c’est une sieste clandestine pratiquée sur la cuvette des toilettes de son entreprise, de préférence à un étage peu fréquenté bien sûr. Et ça existe vraiment ça ? Et oui malheureusement. Une variante de la sieste est en sous-sol pratiquée dans sa voiture. Ce sont les principaux stratagèmes utilisés par les employés épuisés en déficit de sommeil. Alors bien que la sieste soit extrêmement bénéfique, elle pâtit d’une image négative injustifiée. On imagine toujours le fainéant bedonnant qui ronfle la moitié de l’après-midi, le nez sur sa cravate qui porte les traces de la bouteille de rouge et du steak-frites béarnaise qu’il a engloutis pour son déjeuner. Rien que ça… Or, la sieste au travail, à l’école ou sur une aire d’autoroute, ce n’est plus ça. C’est l’occasion pour notre cerveau de récupérer lors d’un repos bref mais très réparateur.',
    reponses: [
      { id: 'a', text: 'Elle est associée à des clichés généralement justifiés.', isCorrect: false },
      { id: 'b', text: 'Elle nuit gravement à la productivité des entreprises.', isCorrect: false },
      { id: 'c', text: 'Elle est injustement dépréciée en milieu professionnel.', isCorrect: true },
      { id: 'd', text: 'Elle est pratiquée par des personnes peu consciencieuses.', isCorrect: false }
    ]
  },
   {   
  id: 'RLTcf1Q27',
  questionType: 'COMPRÉHENSION ORALE',
  level: 'C2',
  question: 'Écoutez le document sonore et la question. Choisissez la bonne réponse.',
    audioText: 'C’est l’hebdomadaire Elsevier, à l’origine d’un classement annuel des personnalités néerlandaises les plus influentes, qui a rendu son verdict. Avec son projet de nettoyer les océans, Boyan Slat, 23 ans à peine, est le Néerlandais de l’année. Il innove au lieu de faire la morale. C’est « le sauveur des océans », juge l’hebdomadaire. L’idée de Boyan Slat, c’est tout simplement de mettre sur pieds d’immenses pièges flottants, capables de récupérer les déchets plastiques dans l’océan. Une série de flotteurs en forme de U, d’un à deux kilomètres chacun. Les pièges attachés à une ancre flottante vers 600 mètres de fond doivent utiliser la force des courants marins pour attirer et concentrer vers eux les débris de plastique.',
    reponses: [
      { id: 'a', text: 'L’auteur d’un procédé novateur.', isCorrect: true },
      { id: 'b', text: 'La personnalité préférée des Néerlandais.', isCorrect: false },
      { id: 'c', text: 'Un explorateur des fonds marins.', isCorrect: false },
      { id: 'd', text: 'Un journaliste et militant écologiste.', isCorrect: false }
    ]
  },
  {   
  id: 'RLTcf1Q28',
  questionType: 'COMPRÉHENSION ORALE',
  level: 'C2',
  question: 'Écoutez le document sonore et la question. Choisissez la bonne réponse.',
    audioText: 'Alors maintenant, pour une question peut-être plus profonde, philosophique, sur la question de politiser la question animale, je crois que, après 45 ans d’efforts théoriques en éthique animale mais aussi au niveau des avancées du droit, notamment des directives européennes, et bien la condition des animaux ne change pas tellement. Elle ne s’améliore pas, aussi parce que nous sommes 7 milliards et demi et que donc le système de production, notamment de la viande, est quand même soumis à des pressions économiques fortes et à un modèle industriel. Mais en tout cas cet échec partiel des éthiques animales exige que l’on change de stratégie.',
    reponses: [
      { id: 'a', text: 'Elle souffre du poids démographique de la population mondiale.', isCorrect: true },
      { id: 'b', text: 'Elle reste dépourvue de concepts philosophiques valables.', isCorrect: false },
      { id: 'c', text: 'Elle bénéficie de l’attention accrue des élites économiques.', isCorrect: false },
      { id: 'd', text: 'Elle témoigne d’une prise de conscience dans les milieux industriels.', isCorrect: false }
    ]
  },
  {   
  id: 'RLTcf1Q29',
  questionType: 'COMPRÉHENSION ORALE',
  level: 'C2',
  question: 'Écoutez le document sonore et la question. Choisissez la bonne réponse.',
    audioText: 'Jusqu’à la Seconde Guerre mondiale, on disait « je est haïssable ». Le seul discours supportable, c’était le discours qui valorisait la famille, ou la nation, ou la religion, et même dans les romans on voyait des fictions qui glorifiaient les soldats, qui glorifiaient les mamans au foyer. Et maintenant on dit le contraire. On dit « je est admirable » parce que la personne est devenue une valeur de notre culture alors qu’avant c’était la famille ou la nation, le groupe humain. Maintenant ce qu’on voit apparaître ces dernières années, j’ai été frappé par le nombre d’Oscars qui étaient attribués à des films qui expliquaient que ce film était basé sur une histoire vraie, comme si le fait de raconter quelque chose qui aurait pu être autobiographique donnait une qualité au film. Et c’est vrai que, avant, on pouvait raconter que des récits de guerre, Napoléon, la Guerre de 14-18, la Guerre de 39-40 parce que les guerres sont des grandes productrices d’œuvres d’art et de récits.',
    reponses: [
      { id: 'a', text: 'L’autonomie du récit cinématographique.', isCorrect: false },
      { id: 'b', text: 'La recrudescence des œuvres de fiction.', isCorrect: false },
      { id: 'c', text: 'Le triomphe des allégories historiques.', isCorrect: false },
      { id: 'd', text: 'La valorisation du discours égotique.', isCorrect: true }
    ]
  },
  {   
  id: 'RLTcf1Q30',
  questionType: 'COMPRÉHENSION ORALE',
  level: 'C2',
  question: 'Écoutez le document sonore et la question. Choisissez la bonne réponse.',
    audioText: 'Même avec ces balbutiements, l’idée de ces promoteurs, c’est de réorienter une partie des capitaux, à commencer par ceux qui sont le moins écolo compatibles, justement vers les énergies décarbonées. De plus en plus de banques retirent de leurs portefeuilles financiers les projets d’investissement d’énergies fossiles les plus polluantes, les plus néfastes pour l’environnement, comme les centrales à charbon, le gaz de schiste, les sables bitumineux. Et sur le podium des établissements financiers les plus engagés on trouve deux banques françaises, BNP Paribas et le Crédit Agricole. La bourse de Paris veut devenir la place financière de référence pour l’économie verte, la France étant le troisième marché mondial des obligations dites vertes, derrière la Chine et les Etats-Unis.',
    reponses: [
      { id: 'a', text: 'Un classement des places boursières de la planète.', isCorrect: false },
      { id: 'b', text: 'Un projet de lutte contre le réchauffement climatique.', isCorrect: false },
      { id: 'c', text: 'Une nouvelle orientation de l’économie financière.', isCorrect: true },
      { id: 'd', text: 'Une mesure capitale en matière d’énergie verte.', isCorrect: false }
    ]
  },
  ],
 [
 {   
    id: 'RLTcf1Q31',
    questionType: 'DES STRUCTURES',
    level: 'A1',
    question: 'Ils sont là ce soir ? - Non, ils ___ au cinéma.',
    reponses: [
      { id: 'a', text: 'vont', isCorrect: true },
      { id: 'b', text: 'regardent', isCorrect: false },
      { id: 'c', text: 'font', isCorrect: false },
      { id: 'd', text: 'ont', isCorrect: false }
    ]
  },
  {   
    id: 'RLTcf1Q32',
    questionType: 'DES STRUCTURES',
    level: 'A1',
    question: 'On va manger ? ___',
    reponses: [
      { id: 'a', text: 'J’ai soif !', isCorrect: false },
      { id: 'b', text: 'J’ai faim !', isCorrect: true },
      { id: 'c', text: 'J’ai sommeil !', isCorrect: false },
      { id: 'd', text: 'J’ai peur !', isCorrect: false }
    ]
  },
  {   
    id: 'RLTcf1Q33',
    questionType: 'DES STRUCTURES',
    level: 'A2',
    question: 'Est-ce qu’elle ___ avec ses enfants à Paris ?',
    reponses: [
      { id: 'a', text: 'est parti', isCorrect: false },
      { id: 'b', text: 'a parti', isCorrect: false },
      { id: 'c', text: 'est partie', isCorrect: true },
      { id: 'd', text: 'a partie', isCorrect: false }
    ]
  },
  {   
    id: 'RLTcf1Q34',
    questionType: 'DES STRUCTURES',
    level: 'A2',
    question: 'Ah, j’ai toujours aimé les chiffres ! C’est pourquoi les maths étaient ___ à l’école.',
    reponses: [
      { id: 'a', text: 'mon métier préféré', isCorrect: false },
      { id: 'b', text: 'ma maîtresse préférée', isCorrect: false },
      { id: 'c', text: 'ma matière préférée', isCorrect: true },
      { id: 'd', text: 'mon matériel préféré', isCorrect: false }
    ]
  },
  {   
    id: 'RLTcf1Q35',
    questionType: 'DES STRUCTURES',
    level: 'A2',
    question: 'Tu as une nouvelle voiture ? Tu me ___ montres ?',
    reponses: [
      { id: 'a', text: 'le', isCorrect: false },
      { id: 'b', text: 'la', isCorrect: true },
      { id: 'c', text: 'l’', isCorrect: false },
      { id: 'd', text: 'les', isCorrect: false }
    ]
  },
  {   
    id: 'RLTcf1Q36',
    questionType: 'DES STRUCTURES',
    level: 'B1',
    question: 'Pourquoi tu ne prends pas le bus ? - Parce que les employés se sont mis ___',
    reponses: [
      { id: 'a', text: 'en grève.', isCorrect: true },
      { id: 'b', text: 'en manifestation.', isCorrect: false },
      { id: 'c', text: 'en circulation.', isCorrect: false },
      { id: 'd', text: 'en réforme.', isCorrect: false }
    ]
  },
  {   
    id: 'RLTcf1Q37',
    questionType: 'DES STRUCTURES',
    level: 'B1',
    question: 'Je connais cette ville ___ que toi !',
    reponses: [
      { id: 'a', text: 'meilleur', isCorrect: false },
      { id: 'b', text: 'le meilleur', isCorrect: false },
      { id: 'c', text: 'mieux', isCorrect: true },
      { id: 'd', text: 'le mieux', isCorrect: false }
    ]
  },
  {   
    id: 'RLTcf1Q38',
    questionType: 'DES STRUCTURES',
    level: 'B1',
    question: 'Le réchauffement climatique ___ beaucoup de problèmes.',
    reponses: [
      { id: 'a', text: 'provoque', isCorrect: true },
      { id: 'b', text: 'favorise', isCorrect: false },
      { id: 'c', text: 'possède', isCorrect: false },
      { id: 'd', text: 'rend', isCorrect: false }
    ]
  },
  {   
    id: 'RLTcf1Q39',
    questionType: 'DES STRUCTURES',
    level: 'B1',
    question: 'Je veux que tu ___ ce test en ligne ! Après, on pourra comparer nos résultats.',
    reponses: [
      { id: 'a', text: 'faisais', isCorrect: false },
      { id: 'b', text: 'fais', isCorrect: false },
      { id: 'c', text: 'feras', isCorrect: false },
      { id: 'd', text: 'fasses', isCorrect: true }
    ]
  },
  {   
    id: 'RLTcf1Q40',
    questionType: 'DES STRUCTURES',
    level: 'B1',
    question: 'Le siècle ___ a vécu cet écrivain était très troublé.',
    reponses: [
      { id: 'a', text: 'qui', isCorrect: false },
      { id: 'b', text: 'dont', isCorrect: false },
      { id: 'c', text: 'où', isCorrect: true },
      { id: 'd', text: 'que', isCorrect: false }
    ]
  },
  {   
  id: 'RLTcf1Q41',
  questionType: 'DES STRUCTURES',
  level: 'B2',
  question: 'Chaque jour dans la voiture, on écoute la même chanson ! J’en ai ras le bol ! « en avoir ras le bol » signifie :',
  reponses: [
    { id: 'a', text: 'en avoir assez', isCorrect: true },
    { id: 'b', text: 'être énervé', isCorrect: false },
    { id: 'c', text: 's’ennuyer', isCorrect: false },
    { id: 'd', text: 'en avoir besoin', isCorrect: false }
  ]
},
{   
  id: 'RLTcf1Q42',
  questionType: 'DES STRUCTURES',
  level: 'B2',
  question: 'Vous parlez de M. Lebrun ? C’est un excellent professeur ___ je n’aurais jamais réussi mon examen !',
  reponses: [
    { id: 'a', text: 'pour lequel', isCorrect: false },
    { id: 'b', text: 'avec qui', isCorrect: false },
    { id: 'c', text: 'duquel', isCorrect: false },
    { id: 'd', text: 'sans lequel', isCorrect: true }
  ]
},
{   
  id: 'RLTcf1Q43',
  questionType: 'DES STRUCTURES',
  level: 'B2',
  question: 'C’est incroyable ! Si tu ___ ce long voyage en Inde, tu n’aurais jamais rencontré ton futur mari !',
  reponses: [
    { id: 'a', text: 'ne faisais pas', isCorrect: false },
    { id: 'b', text: 'n’avais pas fait', isCorrect: true },
    { id: 'c', text: 'n’aurais pas fait', isCorrect: false },
    { id: 'd', text: 'ne ferais pas', isCorrect: false }
  ]
},
{   
  id: 'RLTcf1Q44',
  questionType: 'DES STRUCTURES',
  level: 'B2',
  question: '___ tous ses défauts, c’est un très bon camarade !',
  reponses: [
    { id: 'a', text: 'Grâce à', isCorrect: false },
    { id: 'b', text: 'Malgré', isCorrect: true },
    { id: 'c', text: 'Contrairement à', isCorrect: false },
    { id: 'd', text: 'Avec', isCorrect: false }
  ]
},
{   
  id: 'RLTcf1Q45',
  questionType: 'DES STRUCTURES',
  level: 'B2',
  question: 'Je suis vraiment déçue que tu ___ venir à ma fête hier.',
  reponses: [
    { id: 'a', text: 'ne peux pas', isCorrect: false },
    { id: 'b', text: 'n’as pas pu', isCorrect: false },
    { id: 'c', text: 'ne puisses pas', isCorrect: false },
    { id: 'd', text: 'n’aies pas pu', isCorrect: true }
  ]
},

  {   
    id: 'RLTcf1Q46',
    questionType: 'DES STRUCTURES',
    level: 'C1',
    question: 'Voltaire s’est toujours montré impitoyable envers ses ennemis. ___ , c’était le plus doux des hommes avec ses amis.',
    reponses: [
      { id: 'a', text: 'Au contraire', isCorrect: false },
      { id: 'b', text: 'En effet', isCorrect: false },
      { id: 'c', text: 'En revanche', isCorrect: true },
      { id: 'd', text: 'Dès lors', isCorrect: false }
    ]
  },
  {   
    id: 'RLTcf1Q47',
    questionType: 'DES STRUCTURES',
    level: 'C1',
    question: 'Comme mes enfants adorent manger des gâteaux, je ___ prépare dès que j’en ai l’occasion.',
    reponses: [
      { id: 'a', text: 'les leur', isCorrect: false },
      { id: 'b', text: 'les y', isCorrect: false },
      { id: 'c', text: 'leur en', isCorrect: true },
      { id: 'd', text: 'leur y', isCorrect: false }
    ]
  },
  {   
    id: 'RLTcf1Q48',
    questionType: 'DES STRUCTURES',
    level: 'C1',
    question: '___ de cet auteur est détestable. Ses provocations et son mépris de la morale ne sont pas dignes d’un grand écrivain.',
    reponses: [
      { id: 'a', text: 'Le cynisme', isCorrect: true },
      { id: 'b', text: 'Le barbarisme', isCorrect: false },
      { id: 'c', text: 'L’idéalisme', isCorrect: false },
      { id: 'd', text: 'Le naturalisme', isCorrect: false }
    ]
  },
  {   
    id: 'RLTcf1Q49',
    questionType: 'DES STRUCTURES',
    level: 'C2',
    question: 'Le premier ministre a exclu toute ___ de la nouvelle loi sur le travail.',
    reponses: [
      { id: 'a', text: 'abrogation', isCorrect: true },
      { id: 'b', text: 'annulation', isCorrect: false },
      { id: 'c', text: 'démission', isCorrect: false },
      { id: 'd', text: 'résiliation', isCorrect: false }
    ]
  },
  {   
    id: 'RLTcf1Q50',
    questionType: 'DES STRUCTURES',
    level: 'C2',
    question: '___ la fraude qui a été constatée à l’examen, le mieux est de demander aux étudiants de revenir passer l’épreuve demain.',
    reponses: [
      { id: 'a', text: 'Grâce à', isCorrect: false },
      { id: 'b', text: 'Compte tenu de', isCorrect: true },
      { id: 'c', text: 'Quant à', isCorrect: false },
      { id: 'd', text: 'Nonobstant', isCorrect: false }
    ]
  },
 ],
 [
  {   
    id: 'RLTcf1Q51',
    questionType: 'COMPRÉHENSION ÉCRITE',
    level: 'A1',
    image : Q51Image,
    question: 'Que signifie ce panneau ?',
    reponses: [
      { id: 'a', text: 'On ne peut pas fumer ici.', isCorrect: true },
      { id: 'b', text: 'On ne peut pas dormir ici.', isCorrect: false },
      { id: 'c', text: 'On ne peut pas boire ici.', isCorrect: false },
      { id: 'd', text: 'On ne peut pas sortir ici.', isCorrect: false }
    ]
  },
  {   
    id: 'RLTcf1Q52',
    questionType: 'COMPRÉHENSION ÉCRITE',
    level: 'A1',
    text: 'Coucou Marie, appelle-moi vite sur ce numéro ! Bises.',
    question: 'Que représente ce document ?',
    reponses: [
      { id: 'a', text: 'Une lettre.', isCorrect: false },
      { id: 'b', text: 'Une carte postale.', isCorrect: false },
      { id: 'c', text: 'Un texto.', isCorrect: true },
      { id: 'd', text: 'Une publicité.', isCorrect: false }
    ]
  },
  {   
    id: 'RLTcf1Q53',
    questionType: 'COMPRÉHENSION ÉCRITE',
    level: 'A1',
    image : Q53Image,
    question: 'Quand est organisée l’activité proposée ?',
    reponses: [
      { id: 'a', text: 'Chaque jour.', isCorrect: false },
      { id: 'b', text: 'Une fois par semaine.', isCorrect: true },
      { id: 'c', text: 'Une fois par mois.', isCorrect: false },
      { id: 'd', text: 'Seulement ce jeudi.', isCorrect: false }
    ]
  },
  {   
    id: 'RLTcf1Q54',
    questionType: 'COMPRÉHENSION ÉCRITE',
    level: 'A2',
    image : Q54Image,
    question: 'Quel est l’avantage d’avoir une carte étudiante ?',
    reponses: [
      { id: 'a', text: 'On loge dans une résidence familiale.', isCorrect: false },
      { id: 'b', text: 'On peut préparer certains examens.', isCorrect: false },
      { id: 'c', text: 'On bénéficie de tarifs spéciaux.', isCorrect: true },
      { id: 'd', text: 'On a droit à une entrée gratuite au cinéma.', isCorrect: false }
    ]
  },
  {   
    id: 'RLTcf1Q55',
    questionType: 'COMPRÉHENSION ÉCRITE',
    level: 'A2',
    text: `D’après un sondage réalisé par la BVA, la marche est le sport préféré des Français à 58,4%, suivie
de près par la randonnée à plus de 48%. Cela s'explique d’un côté par les nombreux chemins verts et
espaces dédiés que l'on trouve sur le territoire, et d’autre part grâce à un retour en force de la mode
des randonnées en famille ou entre amis. Viennent ensuite la natation à 39%, le vélo à 23,9%, et le
ski à plus de 17%.`,
    question: 'Parmi les sports cités, lequel est le moins populaire parmi les Français ?',
    reponses: [
      { id: 'a', text: 'La marche.', isCorrect: false },
      { id: 'b', text: 'La natation.', isCorrect: false },
      { id: 'c', text: 'Le vélo.', isCorrect: false },
      { id: 'd', text: 'Le ski.', isCorrect: true }
    ]
  },
  {   
    id: 'RLTcf1Q56',
    questionType: 'COMPRÉHENSION ÉCRITE',
    level: 'A2',
    text: `<b>De :</b> louise123@gmail.com<br/>
<b>A :</b> anne.duris@yahoo.fr<br/>
<b>Objet :</b> Fête<br/><br/>
Anne,<br/>
Merci beaucoup pour ton invitation, j’accepte avec plaisir de venir à ta fête ! 
Est-ce qu’il y aura beaucoup de monde ? J’ai hâte de te voir !<br/><br/>
A bientôt !<br/>
Louise`,
    question: 'Pourquoi Louise envoie un mail à Anne ?',
    reponses: [
      { id: 'a', text: 'Pour annoncer une fête.', isCorrect: false },
      { id: 'b', text: 'Pour refuser son invitation.', isCorrect: false },
      { id: 'c', text: 'Pour confirmer sa présence.', isCorrect: true },
      { id: 'd', text: 'Pour proposer une sortie.', isCorrect: false }
    ]
  },
  {   
    id: 'RLTcf1Q57',
    questionType: 'COMPRÉHENSION ÉCRITE',
    level: 'A2',
    text:  `<div style="text-align:center;">
<b>Vous aimez vous exprimer en public ?</b><br/>
<span style="color:darkblue;">
La Maison du Tourisme de Rouen<br/>
cherche un GUIDE<br/>
avec une bonne formation en histoire de l’art<br/>
et un excellent niveau d’anglais et d’espagnol<br/><br/>
Écrire à : Maison du Tourisme de Rouen<br/>
25 place de la Cathédrale<br/>
76000 Rouen
</span>
</div>`,
    question: 'Ce document est :',
    reponses: [
      { id: 'a', text: 'une publicité.', isCorrect: false },
      { id: 'b', text: 'une offre d’emploi.', isCorrect: true },
      { id: 'c', text: 'une carte de vœux.', isCorrect: false },
      { id: 'd', text: 'une brochure touristique.', isCorrect: false }
    ]
  },
  {   
    id: 'RLTcf1Q58',
    questionType: 'COMPRÉHENSION ÉCRITE',
    level: 'A2',
    image : Q58Image,
    question: 'Qu’est-ce qui est proposé comme boisson pour ce menu ?',
    reponses: [
      { id: 'a', text: 'Une salade.', isCorrect: false },
      { id: 'b', text: 'Des crêpes.', isCorrect: false },
      { id: 'c', text: 'Un gâteau.', isCorrect: false },
      { id: 'd', text: 'Du vin.', isCorrect: true }
    ]
  },
  {   
    id: 'RLTcf1Q59',
    questionType: 'COMPRÉHENSION ÉCRITE',
    level: 'B1',
    text: `<b>Paris, Ville Lumière ; Paris, cité de l’amour ; Paris, capitale de la mode…</b><br/>
<span style="color:darkblue;">
Depuis toujours, Paris est pour les créateurs du monde entier une source d’inspiration, de fantasmes et de clichés. Beaucoup de clichés.<br/><br/>
Ah, ces appartements qui donnent sur la Tour Eiffel, ces mimes à chaque coin de rue !<br/><br/>
Créée et réalisée par une Française, Zabou Breitman, la nouvelle série de Canal +, <i>Paris etc.</i>, diffusée à partir de lundi, évite l’effet carte postale, mais pas quelques stéréotypes : le métro sent mauvais, le Parisien est pressé, etc.
</span>`,
    question: 'La série Paris etc. :',
    reponses: [
      { id: 'a', text: 'parle seulement des clichés parisiens.', isCorrect: false },
      { id: 'b', text: 'présente Paris comme une ville créative.', isCorrect: false },
      { id: 'c', text: 'ressemble à une carte postale.', isCorrect: false },
      { id: 'd', text: 'n’évite pas certains clichés parisiens.', isCorrect: true }
    ]
  },
  {   
    id: 'RLTcf1Q60',
    questionType: 'COMPRÉHENSION ÉCRITE',
    level: 'B1',
    text:  `<b>La lecture face aux écrans et réseaux sociaux</b><br/>
<span style="color:darkblue;">
Dans le salon, il y a la PS4 posée sous la télévision, le portable sur un coussin qui vibre à chaque notification Whatsapp et votre page Facebook ouverte sur votre ordi. Pourtant, malgré tous les écrans et les réseaux sociaux qui se sont installés chez nous, la lecture se porte bien.<br/><br/>
Pour 82% des Français, les réseaux sociaux et les médias ne sont pas un obstacle à la lecture. C’est le résultat d’une étude menée par OpinionWay à l'occasion des Assises du livre numérique qui se tiennent à Paris ce 23 novembre.<br/><br/>
Un chiffre qui monte même à 84% pour les moins de 35 ans, pourtant réputés pour être accros à internet.
</span>`,
    question: 'Pour la majorité des Français :',
    reponses: [
      { id: 'a', text: 'la lecture n’est pas en danger à cause d’Internet.', isCorrect: true },
      { id: 'b', text: 'la lecture progresse grâce à Internet.', isCorrect: false },
      { id: 'c', text: 'la position de lecture change sans cesse.', isCorrect: false },
      { id: 'd', text: 'la lecture connaît des problèmes à cause d’Internet.', isCorrect: false }
    ]
  },
  {   
    id: 'RLTcf1Q61',
    questionType: 'COMPRÉHENSION ÉCRITE',
    level: 'B1',
    text: `<b>Éric Vuillard reçoit le Prix Goncourt 2017</b><br/>
<span style="color:darkblue;">
Présidé par Bernard Pivot, le jury du Goncourt a donc rendu son verdict. Éric Vuillard a reçu le Prix Goncourt 2017 pour <i>L'Ordre du jour</i>, paru aux éditions Actes Sud. Le journaliste Mohammed Aissoui a recueilli tout de suite après les délibérations l'avis des jurés et la réaction du lauréat.<br/><br/>
Après s'être intéressé à la prise de la Bastille, à la conquête de l'Ouest ou à la Grande Guerre dans ses précédents ouvrages, dans celui-ci l'écrivain et cinéaste continue sa recherche de démystification de l'Histoire grâce à la littérature en abordant le sujet du nazisme et de sa progression dans les années 30.
</span>`,
    question: 'Quel est le thème principal du livre couronné par le Prix Goncourt 2017 ?',
    reponses: [
      { id: 'a', text: 'La Grande Guerre.', isCorrect: false },
      { id: 'b', text: 'La Révolution française.', isCorrect: false },
      { id: 'c', text: 'La conquête de l’Ouest.', isCorrect: false },
      { id: 'd', text: 'La montée du nazisme.', isCorrect: true }
    ]
  },
  {   
    id: 'RLTcf1Q62',
    questionType: 'COMPRÉHENSION ÉCRITE',
    level: 'B1',
    text: `<div style="text-align:center;">
<b>« La barrière de la langue n’existe pas à l’étranger »</b>
</div>
<span style="color:darkblue;">
Qu’est-ce que tu chantes à l’étranger ? Comment expliques-tu ton succès aussi retentissant ?<br/><br/>
<b>Zaz :</b> La barrière de la langue n’existe pas vraiment à l’étranger, parce que le public est concentré sur l’énergie que je renvoie. Je sais qu’il y a quand même beaucoup de gens qui apprennent le français pour comprendre mes chansons.<br/><br/>
Je remarque aussi un grand intérêt pour notre langue à travers le monde. Il y a un amour de la culture française aussi. Au-delà de ce que j’imaginais ! Ici, j’ai été mise dans une boîte, alors qu’à l’étranger les gens viennent me voir quel que soit le style de ma musique.
</span>`,
    question: 'L’amour du français à travers le monde…',
    reponses: [
      { id: 'a', text: 'est plus fort que Zaz l’imaginait.', isCorrect: true },
      { id: 'b', text: 'est moins grand que Zaz le croyait.', isCorrect: false },
      { id: 'c', text: 'est conforme aux attentes de Zaz.', isCorrect: false },
      { id: 'd', text: 'est assez problématique pour Zaz.', isCorrect: false }
    ]
  },
  {   
    id: 'RLTcf1Q63',
    questionType: 'COMPRÉHENSION ÉCRITE',
    level: 'B1',
    text:  `<b>Monsieur,</b><br/><br/>
<span style="color:darkblue;">
Actuellement étudiant en 3e année de droit à l’Université de Nantes, je suis à la recherche d’un stage pour une période de 3 mois.<br/><br/>
Ayant pour ambition de devenir juriste, je souhaiterais mettre en pratique mes connaissances auprès de votre cabinet d’avocat renommé. Méthodique et dynamique, je pourrais surtout vous aider pour l’organisation des dossiers de vos clients et pour les communications téléphoniques. Mon envie d’apprendre est forte et je serai ravi de pouvoir mettre mes compétences à votre service.<br/><br/>
Je reste à votre entière disposition pour toute information complémentaire ou pour un entretien qu’il vous conviendrait de me proposer.<br/><br/>
Dans cette attente, je vous prie d’agréer, Monsieur, l’expression de mes salutations distinguées.<br/><br/>
Paul Girardet
</span>`,
    question: "Quel est l’objectif de cette lettre ?",
    reponses: [
      { id: 'a', text: 'Proposer une consultation juridique.', isCorrect: false },
      { id: 'b', text: 'Offrir une formation d’avocat spécialisé.', isCorrect: false },
      { id: 'c', text: 'Obtenir un stage de courte durée.', isCorrect: true },
      { id: 'd', text: 'Signer un nouveau contrat de travail.', isCorrect: false }
    ]
  },
  {   
    id: 'RLTcf1Q64',
    questionType: 'COMPRÉHENSION ÉCRITE',
    level: 'B1',
    text:  `<b>DE :</b> laure_relat@gmail.com<br/>
<b>A :</b> sophie.lebrun@hotmail.com<br/>
<b>Objet :</b> Entretien<br/><br/>
Madame Lebrun,<br/><br/>
Je suis désolée de vous informer que notre entretien prévu le 4 mars ne pourra pas avoir lieu. En effet, je serai absente du bureau jusqu’au 10 mars pour des raisons personnelles.<br/><br/>
Je vous remercie de votre compréhension et vous présente mes excuses pour ce changement de programme. Dès mon retour, je vous contacterai pour convenir d’un nouveau rendez-vous.<br/><br/>
Cordialement,<br/>
Laure Relat`,
    question: 'Que fait Madame Relat ?',
    reponses: [
      { id: 'a', text: 'Elle confirme un entretien.', isCorrect: false },
      { id: 'b', text: 'Elle annule un rendez-vous.', isCorrect: true },
      { id: 'c', text: 'Elle postule pour un travail.', isCorrect: false },
      { id: 'd', text: 'Elle sollicite un congé.', isCorrect: false }
    ]
  },
  {   
    id: 'RLTcf1Q65',
    questionType: 'COMPRÉHENSION ÉCRITE',
    level: 'B1',
    text:  `
Ils sont partout, aux terrasses des cafés pour grappiller quelques miettes de pain, sur les bancs, dans les
arbres… Ou plutôt, ils étaient partout si l’on se fie à cette enquête du Corif, le Centre ornithologique d’Île-de-France. Selon les ornithologues, la moitié des moineaux domestiques aurait disparu de la capitale depuis 2010.
Cette proportion est-elle exacte, sachant qu’il est difficile, voire impossible, de compter ces oiseaux ? Elle
s’appuie sur des comptages locaux qui sont ensuite généralisés. Reste aussi le ressenti : si tu es Parisien(ne),
discute avec tes parents et demande-leur s’ils ont le sentiment de voir de moins en moins de moineaux.
`,
    question: 'Que veut nous montrer cet article ?',
    reponses: [
      { id: 'a', text: 'Il n’est pas facile de savoir le nombre exact d’oiseaux à Paris.', isCorrect: true },
      { id: 'b', text: 'Les Parisiens ont le sentiment de voir moins d’oiseaux dans leur ville.', isCorrect: false },
      { id: 'c', text: 'Le nombre d’oiseaux est clairement en diminution dans la capitale.', isCorrect: false },
      { id: 'd', text: 'Les ornithologues adorent compter les moineaux domestiques.', isCorrect: false }
    ]
  },
  {   
  id: 'RLTcf1Q66',
  questionType: 'COMPRÉHENSION ÉCRITE',
    level: 'B2',
    text: `
<b>Le Beaujolais nouveau est arrivé</b>
Tous les troisièmes jeudi de novembre, les amateurs de vin se réjouissent : le Beaujolais nouveau débarque sur
les tables. Mais derrière l’événement festif se cache un coup marketing de génie qui améliore sa stratégie
chaque année. En effet, la sortie d’un vin à date fixe, relayée par tous les médias, est une chance pour les
vignerons qui écoulent facilement leur stock d’un vin... que tout le monde s’accorde à trouver très moyen. Le
Beaujolais nouveau est toutefois une tradition bien ancrée dans la culture populaire et a largement dépassé
nos frontières, puisqu’on en trouve à la même date dans la plupart des pays qui consomment du vin.
`,
    question: 'Que nous apprend cet article sur le Beaujolais nouveau ?',
    reponses: [
      { id: 'a', text: 'Sa qualité est reconnue dans le monde entier.', isCorrect: false },
      { id: 'b', text: 'Il bénéficie d’une grande publicité médiatique.', isCorrect: true },
      { id: 'c', text: 'Il peut être seulement apprécié des experts.', isCorrect: false },
      { id: 'd', text: 'Les Français aiment le déguster tous les jeudis.', isCorrect: false }
    ]
  },
  {   
    id: 'RLTcf1Q67',
    questionType: 'COMPRÉHENSION ÉCRITE',
    level: 'B2',
    text:  `
C’est une idée novatrice. L’université François Rabelais, à Tours a décidé de mettre en place dès cette
rentrée des toilettes transgenres. Au départ de cette initiative, une rencontre entre un étudiant de première
année et la chargée de mission diversité, égalité et handicap.
Inscrit sous un prénom féminin, l’étudiant venait d'entamer un parcours de réassignation de genre.
Engagé dans un processus de traitement hormonal, il était en permanence obligé de justifier la différence
entre son apparence physique, désormais masculine, et son prénom féminin. Choisir ses toilettes était donc
aussi un moment difficile.
S'appuyant sur la loi de 2016 contre les discriminations de genre, l'université François-Rabelais a
décidé de s'emparer du problème. Des toilettes non-genrées pour les étudiants transgenres sont donc
maintenant à disposition. Au total, environ dix personnes seraient concernées.
`,
    question: 'Pourquoi l’Université de Tours a-t-elle mis en place cette « idée novatrice » ?',
    reponses: [
      { id: 'a', text: 'Pour promouvoir des règles d’hygiène simples.', isCorrect: false },
      { id: 'b', text: 'Pour lutter contre une forme de discrimination.', isCorrect: true },
      { id: 'c', text: 'Pour faciliter les rencontres entre les étudiants.', isCorrect: false },
      { id: 'd', text: 'Pour résoudre un problème de santé publique.', isCorrect: false }
    ]
  },
  {   
    id: 'RLTcf1Q68',
    questionType: 'COMPRÉHENSION ÉCRITE',
    level: 'B2',
    text: `
<div style="text-align: center;">
  <b>Une particularité très parisienne</b><br>
  Lancés en 2007, les Vélib’ ont connu un succès sans précédent. Avec près de 20 000 vélos en libre-service
  et 300 000 abonnés, 75 Vélib’ sont loués par minute. Mais depuis dix ans, Vélib’ à Paris, c’est aussi l'équivalent
  de l’ensemble du parc (toujours 20 000 vélos) volé et dégradé chaque année.<br>
  Un taux de vandalisme très élevé. « Ça ne s'est pas démenti tout au long du contrat, c'est devenu une
  constante », explique Albert Asséraf, directeur général stratégie chez JCDecaux. Présent dans plusieurs autres
  villes en Europe, le géant de la publicité, exploitant de Vélib’ depuis son lancement, assure que c'est une
  particularité très parisienne.
</div>
`,
    question: 'Quel présente cet article ?',
    reponses: [
      { id: 'a', text: 'Une initiative écologique surprenante.', isCorrect: false },
      { id: 'b', text: 'Une publicité pour la capitale française.', isCorrect: false },
      { id: 'c', text: 'Un problème de délinquance urbaine.', isCorrect: true },
      { id: 'd', text: 'Une offre touristique remarquable.', isCorrect: false }
    ]
  },
  {   
    id: 'RLTcf1Q69',
    questionType: 'COMPRÉHENSION ÉCRITE',
    level: 'B2',
    text:  `
<div style="text-align: center;">
  <b>Pourquoi on est souvent déçu par les adaptations de livres au cinéma ?</b><br>
  Adapter un livre en film est souvent un pari risqué que se lancent les réalisateurs. Car en plus
  d’affronter la critique, le film doit faire face à un public encore plus redoutable : les fans du livre dont il
  est inspiré. Adapter un livre c'est évidemment prendre le risque de décevoir ceux qui l'ont lu
  auparavant. « Pourquoi je préfère tellement le livre au film ? » : c’est une question que bon nombre de
  lecteurs se posent après avoir vu une adaptation. Et finalement la réponse est simple : rien ne rivalise
  avec votre imagination.<br>
  L'auteure Marguerite Duras avait une opinion assez arrêtée sur la question. « Le cinéma arrête le
  texte, frappe de mort sa descendance : l’imaginaire. C’est là sa vertu même : de fermer, d’arrêter
  l'imaginaire. Cet arrêt, cette fermeture s’appelle le film. Bon ou mauvais, sublime ou exécrable, le film
  représente cet arrêt définitif. »
</div>
`,
    question: 'Que pensait Marguerite Duras des adaptations de livres au cinéma ?',
    reponses: [
      { id: 'a', text: 'Elles excitent l’imagination du spectateur.', isCorrect: false },
      { id: 'b', text: 'Elles signifient la mort de la littérature.', isCorrect: false },
      { id: 'c', text: 'Elles fixent pour toujours la représentation.', isCorrect: true },
      { id: 'd', text: 'Elles définissent la qualité d’une œuvre.', isCorrect: false }
    ]
  },
  {   
    id: 'RLTcf1Q70',
    questionType: 'COMPRÉHENSION ÉCRITE',
    level: 'B2',
    text:  `
Il y a les « Flèches des cathédrales », sur l’A10 ; « Les Chevaliers cathares » sur l’A61 ; un sanglier géant sur
l’A34... La liste de ces imposantes œuvres d’art qui bordent les autoroutes françaises est longue. On en
compterait aujourd’hui plus de 75.
L’art d’autoroute suscite rarement l’enthousiasme. La plupart du temps, on passe en voiture sans remarquer les
œuvres, au grand dam des syndicats d’artistes qui militent pour une signalétique plus ronflante. C’est là tout le
paradoxe de l’art d’autoroute : il est à la fois monumental et invisible.
De fait, il exclut la provocation et les formes susceptibles de perturber le conducteur. Il privilégie les matériaux
résistants et s’assortit de bonnes grosses lourdeurs symboliques liées au territoire : comme « Woinic » sur
l’A34, un sanglier de 50 tonnes qui livre une vision cauchemardesque du symbole animalier des Ardennes.
`,
    question: 'Que nous apprend cet article sur l’art d’autoroute ?',
    reponses: [
      { id: 'a', text: 'Il impressionne les automobilistes grâce à son gigantisme.', isCorrect: false },
      { id: 'b', text: 'Il développe des formes originales et une symbolique subtile.', isCorrect: false },
      { id: 'c', text: 'Il s’appuie sur une vision subversive des régions françaises.', isCorrect: false },
      { id: 'd', text: 'Il provoque assez peu de réactions auprès du grand public.', isCorrect: true }
    ]
  },
  {   
    id: 'RLTcf1Q71',
    questionType: 'COMPRÉHENSION ÉCRITE',
    level: 'B2',
    text: `
<b>Google, Facebook, Microsoft et les autres proposent des systèmes de traduction en ligne qui suffisent à
comprendre un message posté sur les réseaux sociaux ou donnent une idée du sens d’une phrase dans
une langue que l’on ne maîtrise pas. Pour la littérature ou toute forme d’expression complexe, mieux
vaut s’en remettre à un traducteur en chair et en os. A l’occasion d’une compétition organisée en février
en Corée du Sud, des traducteurs humains ont été confrontés à trois systèmes de traduction basés sur
l’intelligence artificielle. Le résultat a été sans appel. Sur les textes littéraires, techniques et les articles
de journaux à traduire, les traducteurs humains ont atteint des scores nettement supérieurs aux
logiciels</b>
`,
    question: 'Quel est le message principal de cet article ?',
    reponses: [
      { id: 'a', text: 'Les ordinateurs maîtrisent mieux la traduction que les humains.', isCorrect: false },
      { id: 'b', text: 'Les logiciels de traduction paraissent de plus en plus complexes.', isCorrect: false },
      { id: 'c', text: 'L’intelligence artificielle rivalise presque avec l’esprit humain.', isCorrect: false },
      { id: 'd', text: 'Les hommes restent de meilleurs traducteurs que les machines.', isCorrect: true }
    ]
  },
  {   
    id: 'RLTcf1Q72',
    questionType: 'COMPRÉHENSION ÉCRITE',
    level: 'B2',
    text:  `
Surconsommation, ravages de la pollution et diminution des ressources… les décroissants font le même constat que
beaucoup d’entre nous : leur vie ne tourne pas rond. Mais eux passent à l’acte. Fatigués de la course au « toujours plus »,
ils choisissent de vivre mieux avec moins. Une fois le processus du « désengagement » enclenché, la diminution des
besoins matériels est remplacée, peu à peu, par une grande richesse intérieure. Un peu comme si l’espace « dégagé »
laissait entrer une autre dimension, spirituelle, presque mystique. Il ne s’agit pas de renouer avec de vieilles traditions
contemplatives religieuses, retiré du monde, à la recherche d’un dieu. Cette spiritualité-là, au contraire, va à la rencontre
des humains, chacun se sentant partie intégrante d’un tout, et non plus maître arrogant de la planète.
`,
    question: 'D’après cet article, qui sont les décroissants ?',
    reponses: [
      { id: 'a', text: 'Les adeptes d’un mode de vie écologique.', isCorrect: true },
      { id: 'b', text: 'Les fondateurs d’une nouvelle religion.', isCorrect: false },
      { id: 'c', text: 'Les membres d’un groupe de consommateur.', isCorrect: false },
      { id: 'd', text: 'Les partisans d’une société traditionnelle.', isCorrect: false }
    ]
  },
  {   
    id: 'RLTcf1Q73',
    questionType: 'COMPRÉHENSION ÉCRITE',
    level: 'C1',
    text:  `
Sport collectif par nature, le football a assez vite, au cours de son histoire, fait célébrer des
individualités. Dès l’après-guerre, la liste de ces figures qui sortent du rang s’allonge, en parallèle
de l’évolution de ce sport vers un divertissement de masse de plus en plus médiatisé, qui désigne des
idoles. On ne peut donc pas dire que la starification des joueurs est un phénomène nouveau, mais,
aussi progressive soit-elle, l’individualisation du football est une réalité dont on peut identifier une
quantité de signes qui sont allés en se multipliant au cours de la période récente. Les joueurs les plus
célèbres, transformés en institutions, ont ainsi fini par faire concurrence aux clubs
`,
    question: 'Que dit l’auteur de cet article concernant le football ?',
    reponses: [
      { id: 'a', text: 'Sa beauté collective a disparu au profit d’un individualisme prononcé.', isCorrect: false },
      { id: 'b', text: 'Son individualisation a connu une accélération ces dernières années.', isCorrect: true },
      { id: 'c', text: 'Son évolution est étroitement liée à la figure médiatique des joueurs.', isCorrect: false },
      { id: 'd', text: 'Son histoire récente a été marquée par une médiatisation inacceptable.', isCorrect: false }
    ]
  },
  {   
    id: 'RLTcf1Q74',
    questionType: 'COMPRÉHENSION ÉCRITE',
    level: 'C1',
    text: `
En France, souvent, elles ne sont guère davantage que des bouteilles à la mer jetées dans le bain trouble de
l'actualité. Leur nom évoque les querelles de stationnement en ville, la sauvegarde d'espèces menacées ou les
mobilisations de fans contre les remakes de films cultes. Pourtant, les pétitions sont un des instruments démocratiques
historiques de la République française, qu’Emmanuel Macron a récemment annoncé vouloir réformer afin de raviver « une
représentativité qui vive au quotidien ». Elles sont, avant toute chose, un droit. « Dans notre système démocratique
représentatif, le droit de pétition se définit comme la prérogative du citoyen par laquelle il participe directement au
gouvernement de la cité, précise Yann-Arzel Durelle-Marc, maître de conférence en Histoire du droit et des institutions. Le
droit de pétition prend donc place aux côtés du droit de vote et du référendum, à rang égal et distinct, parmi les droits
politiques du citoyen contemporain. »
`,
    question: 'Que nous apprend cet article sur le droit de pétition en France ?',
    reponses: [
      { id: 'a', text: 'Il constitue, malgré des usages souvent dérisoires, un outil démocratique précieux.', isCorrect: true },
      { id: 'b', text: 'Il remplit, grâce à une réforme récente, un rôle institutionnel prépondérant.', isCorrect: false },
      { id: 'c', text: 'Il représente, en raison de son inefficacité évidente, une mode historique révolue.', isCorrect: false },
      { id: 'd', text: 'Il forme, en dépit de sa nature juridique, une pratique démocratique répandue.', isCorrect: false }
    ]
  },
  {   
    id: 'RLTcf1Q75',
    questionType: 'COMPRÉHENSION ÉCRITE',
    level: 'C1',
    text: `
Souvent présentés comme un symbole de l'« excellence à la française », les lycées français de l'étranger
étaient en grève lundi contre les coupes budgétaires et suppressions de postes en vue.

Les enseignants protestataires dénoncent la baisse des dotations de l'État à l'Agence pour l'enseignement
du français à l'étranger (AEFE), organisme public chapeautant près de 500 établissements à travers la planète.

Les syndicats voient dans cette réduction budgétaire le risque d'un affaiblissement d'un réseau réputé,
élément clef du « soft power » français et du rayonnement de la francophonie.

« Les lycées sont un outil d'influence majeur pour la diplomatie et c'est un réseau pour les entreprises
françaises qui permet de favoriser la mobilité de leur personnel en offrant une continuité d'une scolarité de
qualité », résume Jean-Baptiste Ribet, responsable du syndicat SNES et professeur de maths au Lycée français
de Madrid.
    `,
    question: 'Que dénonce le personnel des lycées français de l’étranger ?',
    reponses: [
      { id: 'a', text: 'La baisse du prestige des établissements français à l’étranger.', isCorrect: false },
      { id: 'b', text: 'L’affaiblissement des critères de recrutement des professeurs.', isCorrect: false },
      { id: 'c', text: 'Le manque d’influence du réseau d’entreprises francophones.', isCorrect: false },
      { id: 'd', text: 'La diminution du budget alloué à l’enseignement du français.', isCorrect: true }
    ]
  },
  {   
    id: 'RLTcf1Q76',
    questionType: 'COMPRÉHENSION ÉCRITE',
    level: 'C1',
    text:  `
              L’humanité vit à crédit

Au 2 août, la population mondiale a consommé l'intégralité des ressources que la planète peut produire en une année
et vivra à crédit jusqu'au 31 décembre. En 1997, ce dépassement des ressources avait lieu fin septembre. Tous les ans,
cette date symbolique recule un peu plus et, si nous continuons à ce rythme, il faudra l'équivalent de deux planètes
en 2050 pour assouvir les besoins humains.

Toutefois, cette surexploitation des ressources n'est pas inéluctable. Il est tout à fait possible de faire reculer cette
date. Il faut pour cela troquer les énergies fossiles pour les énergies renouvelables, réussir la transition énergétique. À elles
seules, les empreintes carbone représentent 60% de l'empreinte écologique. Enfin, et ce n'est pas une nouveauté, il faudrait
que l'humanité réduise sa consommation de viande.
    `,
    question: 'Que nous apprend cet article sur l’avenir de notre planète ?',
    reponses: [
      { id: 'a', text: 'Les ressources naturelles se réduiront considérablement les prochaines années.', isCorrect: false },
      { id: 'b', text: 'La transition énergétique permettra de diminuer intelligemment nos ressources.', isCorrect: false },
      { id: 'c', text: 'Les ressources naturelles ne manqueront pas nécessairement à l’humanité.', isCorrect: true },
      { id: 'd', text: 'Les besoins humains ne seront plus dépendants des ressources naturelles.', isCorrect: false }
    ]
  },
  {   
    id: 'RLTcf1Q77',
    questionType: 'COMPRÉHENSION ÉCRITE',
    level: 'C1',
    text:  `
      À l’occasion de l’année internationale du tourisme durable pour le développement, la ville de Venise a mis
      en place une campagne pour sensibiliser les touristes à sa protection. Avec ses 20 millions de visiteurs annuels, la
      cité des doges est touchée de plein fouet par un tourisme de masse qu’elle a de plus en plus de mal à contrôler. De
      nombreux Vénitiens ont déjà quitté la ville, et des affiches invitant les touristes à rentrer chez eux ont fait leur
      apparition.

      La municipalité a donc édicté une série de 12 recommandations pour faciliter la circulation dans les rues,
      favoriser le commerce local et « systématiser » les gestes éco-citoyens. Elle préconise par exemple de ne pas jeter de
      détritus, de tenir sa droite dans les voies étroites et de ne pas s'éterniser sur les ponts pour prendre des photos. Il
      est aussi rappelé que les pigeons de la place Saint-Marc ne doivent pas être nourris. Un petit rappel donc, avant de
      profiter pleinement de la Dolce Vita à la vénitienne.
    `,
    question: 'Quel est l’objectif de la campagne mise en place par la municipalité de Venise ?',
    reponses: [
      { id: 'a', text: 'Rendre la ville à ses habitants en poussant les touristes à quitter la ville.', isCorrect: false },
      { id: 'b', text: 'Inciter les visiteurs à adopter une attitude plus respectueuse de la cité.', isCorrect: true },
      { id: 'c', text: 'Faire de Venise une ville modèle en matière de développement durable.', isCorrect: false },
      { id: 'd', text: 'Protéger un secteur économique fragilisé par le tourisme de masse.', isCorrect: false }
    ]
  },
  {   
    id: 'RLTcf1Q78',
    questionType: 'COMPRÉHENSION ÉCRITE',
    level: 'C2',
    text:`
      Au pays de la course au diplôme, où le business du soutien scolaire est florissant, on pourrait s’attendre à ce
      qu’une offre nationale d’aide aux devoirs, gratuite, soit accueillie favorablement. Et pourtant, le dispositif des « devoirs
      faits », que le gouvernement a lancé officiellement mardi 7 novembre, suscite des réserves au sein de la communauté
      éducative.

      Sur le « terrain » des écoles, collèges et lycées, un constat est pourtant partagé : les devoirs restent un facteur
      d’inégalités sociales et scolaires. Ce sont ces inégalités que le ministre de l’Education entend réduire : « Il s’agit d’aider
      en premier lieu les élèves qui ne bénéficient pas de circonstances familiales leur permettant de bien travailler à la
      maison », a-t-il expliqué. Sans convaincre tout à fait les représentants du monde scolaire, pour qui la méthode
      employée pose question.

      Compétence des intervenants, lourdeur des emplois du temps, mise en œuvre précipitée… sur les réseaux
      sociaux, les critiques fusent de la part de professeurs lassés des « excès de com’ » et de la « valse des annonces ». Du «
      déjà-vu », disent les spécialistes, en rappelant l’empilement de dispositifs existants – études dirigées,
      accompagnement éducatif, etc. – au point qu’on ne sait plus évaluer, aujourd’hui, ni ce qu’il en reste ni leur utilité.
    `,
    question: 'Pour quelle raison le nouveau dispositif d’aide aux devoirs a-t-il été froidement accueilli ?',
    reponses: [
      { id: 'a', text: 'Les mesures annoncées risquent de creuser les inégalités.', isCorrect: false },
      { id: 'b', text: 'L’aide aux devoirs est considérée en soi comme inutile.', isCorrect: false },
      { id: 'c', text: 'L’efficacité de l’offre proposée semble assez illusoire.', isCorrect: true },
      { id: 'd', text: 'Les moyens mis en place restent largement insuffisants.', isCorrect: false }
    ]
  },
  {   
    id: 'RLTcf1Q79',
    questionType: 'COMPRÉHENSION ÉCRITE',
    level: 'C2',
    text:  `
      De Voltaire à Zola, à Sartre évidemment, l’écrivain a longtemps incarné, en France, la figure de
      l’intellectuel engagé. Depuis la fin des années 1950, celle-ci est en déclin. C’est d’abord le Nouveau
      Roman qui stigmatise l’engagement sartrien. Puis la montée en puissance des sciences humaines et
      sociales dans un contexte de division du travail intellectuel et de demande accrue d’expertise. Les
      écrivains, qui n’ont pas de compétences certifiées, se sont ainsi, peu à peu, mis en retrait.

      Pourtant, même s’ils ne s’engagent plus de la même façon, les écrivains innovent par leur travail
      sur la langue, sur la forme, par les interrogations qu’ils portent, les cadres de la pensée qu’ils
      bousculent ou par les investigations qu’ils mènent sur le monde social, l’histoire, la mémoire. A
      l’époque où la communication politique utilise les ressorts du storytelling, la littérature la plus
      novatrice, parfois accusée de formalisme, conserve une fonction critique essentielle.
    `,
    question: 'Que nous apprend cet article sur les écrivains contemporains ?',
    reponses: [
      { id: 'a', text: 'Le regard qu’ils posent sur la société s’avère précieux aujourd’hui encore.', isCorrect: true },
      { id: 'b', text: 'L’émergence des sciences sociales a complètement éclipsé leur rôle.', isCorrect: false },
      { id: 'c', text: 'Ils ne possèdent pas le talent et l’expertise de leurs glorieux prédécesseurs.', isCorrect: false },
      { id: 'd', text: 'Leurs travaux sont trop avant-gardistes pour prétendre à quelque influence.', isCorrect: false }
    ]
  },
  {   
    id: 'RLtcf1Q80',
    questionType: 'COMPRÉHENSION ÉCRITE',
    level: 'C2',
    text:  `
Discrètement, le vêtement est en train de remonter dans la pyramide de Maslow, qui établit une classification
hiérarchique des besoins humains. Il pourrait bien demain préserver notre santé mentale et sociale,
autrement que par la mode et la haute couture ! Un textile connecté et intelligent peut réagir à la sudation,
enregistrer les statistiques d'un sportif, et s'autonettoyer grâce à l'effet lotus : les feuilles de lotus présentent
une surface hydrophobe complexe qui ne retient pas la boue des mares où ils poussent.

  Par le passé, le textile a joué un rôle géopolitique essentiel puisque sa vente a structuré les différentes routes
de la soie, colonne vertébrale de la majorité des conflits armés d'Eurasie depuis Alexandre le Grand, en
passant par les Croisades. Or, les tissus intelligents pourraient bouleverser la géopolitique une fois encore.
    `,
    question: 'Quel est le point de vue du journaliste concernant le textile ?',
    reponses: [
      { id: 'a', text: 'Sa transformation pourrait révolutionner le domaine de la mode.', isCorrect: false },
      { id: 'b', text: 'Son commerce constitue aujourd’hui une priorité politique majeure.', isCorrect: false },
      { id: 'c', text: 'Son évolution risque de modifier les rapports de force entre Etats.', isCorrect: true },
      { id: 'd', text: 'Sa production pose des problèmes éthiques insurmontables.', isCorrect: false }
    ]
  }
 ]
];
export default RLTcf ;