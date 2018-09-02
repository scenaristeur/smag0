/**
@license
Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/

import { html } from '@polymer/lit-element';
import { PageViewElement } from './page-view-element.js';

// These are the shared styles needed by this element.
import { SharedStyles } from './shared-styles.js';

class SmagSpoggy extends PageViewElement {
  _render(props) {
    return html`
    ${SharedStyles}
    <section>
    <h2>Spoggy</h2>
    <p>
    Spoggy est une interface de partage d'informations.<br>
    C'est une application basée sur le principe des cartes mentales : <br>
    On créé un noeud pour chaque concept et on établit ensuite les liens entre ces concepts.
    Mais Spoggy permet de surcroît, de structurer les données en nommant
    et en orientant la relation entre deux concepts.<br>
    Spoggy peut ainsi servir de point de départ pour élaborer un graphe RDF plus complet
    afin décrire un projet, un environnement
    ou faciliter la transmission d'informations.<br>
    <small>
    (voir le projet <a href="/smag-smag0">Smag0</a>)
    </small>
    <br><br>
    Spoggy permet d'enregistrer facilement les idées qui nous passent par
    la tête pour ensuite les exporter et les partager par mail.<br>
    Parmi les autres possibilités qu'offre Spoggy :<br>
    <ul>
    <li>
    confection de cartes multi-utilisateurs en mode collaboratif
    </li>
    <li>visualisation et insertion de données depuis ou vers un enpoint Sparql...
    </p>
    </section>
    <section>
    <h2>Les 2 méthodes <br>pour créer un graphe<br> +<br> import & export</h2>
    <p>Pour créer un graphe dans Spoggy, rien de plus simple.<br>
    Rendez-vous à l'adresse
    <b><a href="http://spoggy.herokuapp.com" target="_blank">http://spoggy.herokuapp.com</a></b>.<br>
    <small>( le chargement peut paraître long si le serveur est en veille )</small><br>
    ou ici pour voir un exemple d'utiliation :
    <a href="http://spoggy.herokuapp.com/?source=https://raw.githubusercontent.com/scenaristeur/heroku-spoggy/master/public/exemple_files/Spoggy_init.json" target="_blank">démo</a>


    <ul>
    <li>
    adaptez la vue, déplacez le graphe, zoomez avec les boutons verts en bas ou avec la molette de votre souris,
    </li>
    <li>
    modifiez les réglages : distance entre deux noeuds, force des liens... dans le Menu / Réglages
    </li>
    </ul>
    </p>

    <p>
    Une fois l'interface chargée, vous avez deux possibilités pour remplir le graphe : <br>
    <ol>
    <li>
    La méthode simple
    </li>
    <li>
    la méthode rapide
    </li>
    </ol>
    </p>

    <p>
    Ces deux méthodes sont expliquées ci-dessous et sont suivies des indications
    pour <b>importer</b> et <b>exporter</b> un  graphe, ainsi que d'un aperçu
    des principales commandes de Spoggy.
    </p>
    </section>
    <section>
    <h2>Bouton 'Editer'<br>=<br> la méthode simple</h2>
    <p>
    La méthode la plus simple consiste à utiliser le bouton <b>'Editer'</b>.<br>
    Cliquez dessus, et cliquez ensuite sur <b>'Ajouter un noeud'</b>,
    puis comme indiqué, cliquez dans l'espace de travail, dans un endroit vide.
    Une fenêtre devrait alors s'ouvrir afin que vous puissiez donner un nom au noeud que vous êtes en train de créer.<br>
    Indiquez un nom, par exemple <b>'Garfield'</b> et validez en cliquant sur <b>'OK'</b>.<br>
    Voilà, vous avez créé votre premier élément du graphe.<br><br>
    Renouvelez la procédure pour créer un deuxième noeud de la même manière, mais cette fois, nommez-le <b>'Chat'</b>.<br><br>
    Pour relier les deux noeuds, cliquez sur <b>'Ajouter un lien'</b>, puis comme indiqué,
    cliquez sur le noeud <b>'Garfield'</b> et <u>glissez votre souris tout en maintenant le clic</u>,
    jusqu'au noeud <b>'Chat'</b>.<br>
    Une fois arrivé sur le noeud <b>'Chat'</b>, relâchez le clic, une nouvelle fenêtre doit s'ouvrir vous demandant le
    nom du lien.<br> Saisissez alors le mot <b>'type'</b>, et validez par <b>'OK'</b>. <br>
    Vous venez de créer votre premier triplet...<br>
    Et c'est tout ce dont vous avez besoin pour créer un graphe ! <br>
    Continuez maintenant votre graphe en ajoutant d'autres noeuds et d'autres liens.<br><br>
    <u>A noter :</u> Lorsque vous cliquez sur un noeud ou sur un lien existant,
    les boutons sont modifiés et vous pouvez de cette manière modifier ou supprimer l'élément sur lequel vous avez cliqué.<br><br>
    <a href="/images/garfiled.png" target="_blank"><img src="/images/garfield.png" width="350px", height="350px"></a><br>
    <a href="/images/garfiled2.png" target="_blank"><img src="/images/garfield2.png" width="350px", height="350px"></a>
    </p>
    </section>
    <section>
    <h2>La zone de saisie<br>+<br>"3 mots, une virgule et Entrée"<br>=<br> la méthode rapide</h2>
    <p>
    La méthode rapide consiste à utiliser le concept de triplet directement,
    mais elle est un peu plus technique, il faut faire attention au dernier charactère saisi,  ainsi qu'aux espaces!<br>
    Pour la méthode rapide, on va utiliser le champ de saisie tout en haut,
    là où est écrit <b>"3 mots, une virgule et Entrée".</b><br>
    Commencez par cliquer dedans et insérez-y votre triplet : <b>Titi type Canari,</b><br><br>
    <b><u>N'oubliez-pas de terminer par une virgule, elle est essentielle !</u></b><br><br>
    Validez par la touche <b>'Entrée'</b> de votre clavier.<br>
    Et voilà ! <br><br>
    Il y a cependant quelques petites choses à savoir sur la méthode rapide,
    elle est inspirée du format <a href="https://fr.wikipedia.org/wiki/Turtle_(syntaxe)" target="_blank">Turtle / RDF</a> :
    <ol>
    <li>
    La <b>virgule</b> est essentielle pour terminer le triplet et conserver les deux premiers
    termes du triplet (Titi et type) afin de continuer votre graphe en réutilisant les dernières informations saisies.<br>
    Mais vous pouvez aussi la remplacez par un <b>point-virgule</b>, vous ne garderez que le premier terme (Titi).
    Et vous pourrez compéler par <b>mange Graine,</b><br>
    En la remplaçant par un <b>point</b>, vous ne gardez rien.<br>
    En la remplaçant par un tiret par exemple <b>Titi type Canari-</b>, vous deplacerez
    le troisième terme à la place du premier, cela pourra vous servir pour enchainer avec <b>couleur Jaune,</b><br>
    <b><u>Attention :</u> Si vous ne saisissez ni virgule, ni point-virgule,
    ni point, ni tiret, le triplet n'est pas envoyé au graphe !</b>
    </li>
    <li>
    Une autre chose à connaître sur la méthode rapide, est qu'elle permet de saisir
    des termes de triplet plus élaborés en les entourant par des doubles-quotes (ou guillemets doubles).<br>
    Ainsi, rien ne vous empêche de saisir des triplets tels que : <br>
    <b>"Mon gros chat" "mange toujours" "des Souris",</b><br><br>
    <b>Encore une fois, n'oubliez pas la virgule !</b>
    </li>
    </ol>

    </p>
    </section>
    <section>
    <h2>import / export</h2>
    <p>
    Lorsque le graphe vous convient, où lorsque vous voulez en garder un copie pour
    revenir dessus ensuite, vous pouvez utiliser les commandes d'export et d'import. <br>
    Les commandes de Spoggy commencent par un slash ( ou barre oblique) : <b>/</b> .<br>
    Elles sont à saisir dans le champ de saisie utilisé précédemment pour
    <b>la méthode rapide</b>, là où est écrit "<b>3 mots, une virgule et Entrée</b>".<br>
    Par exemple :
    <ul>
    <li>
    <b>/e</b> pour (e)xporter.
    Saisissez ensuite un nom, validez par <b>'OK'</b>,
    et votre fichier au format json devrait automatiquement se télécharger
    dans le dossier "Téléchargements". <br>
    Si vous le souhaitez, vous pouvez ensuite l'envoyer par mail en pièce jointe
    pour le partager, avec un message du style : <br><br>
    <i><b>
    Salut,
    Je t'envoie en pièce jointe un graphe que j'ai fait avec l'application Spoggy, <br>
    est-ce que tu peux, s'il te plait, le compléter en y ajoutant les informations qui te semblent utiles,
    et me le renvoyer.<br>
    <br>
    Pour accéder à l'application, c'est à cette adresse :
    <a href="http://spoggy.herokuapp.com" target="_blank">http://spoggy.herokuapp.com</a><br>
    Et pour la notice d'utilisation, et savoir comment importer ce graphe, jete un oeil ici :
    <a href="http://smag0.netlify.com/smag-spoggy" target="_blank">http://smag0.netlify.com/smag-spoggy</a><br>
    <br>
    Je t'en remercie par avance,
    A +
    </b></i>
    <br><br>
    </li>
    <li>
    <b>/i</b> vous permet d'(i)mporter à nouveau votre fichier (ou celui qui vous a été envoyé par mail), dans Spoggy.
    </li>
    </ul>
    </p>
    </section>
    <section>
    <h2>Aide<br>&<br>autres commandes</h2>
    <ul>
    <li>
    <b>/n</b> permet de créer un nouveau graphe.
    </li>
    <li>
    <b>/t</b> permet d'exporter au format Turtle / Rdf.
    </li>
    <li>
    <b>/h</b> pour afficher l'aide, des exemples, des vidéos, des tutoriels...<br>
    Vous y apprendrez notamment les paramètres d'url, les réglages pour donner
    plus de souplesse ou de ressort à votre graphe, comment intégrer Spoggy dans votre site,
    ou encore comment installer installer une version de Spoggy sur votre machine ou participer à son developpement..
    </li>
    </ul>
    </p>
    <p>Certaines de ces fonctionnalités sont également accessible par le menu.</p>
    </section>

    <section>
    <h2>Confidentialité<br>Sécurité des données</h2>
    <p>Par défaut, Spoggy est dans le mode '<b>Solo</b>'
    et lors des manipulation décrites ci-dessus, aucune donnée n'est envoyée à nos serveurs,
    l'application fonctionne de manière autonome, entièrement dans la page web.<br>
    Le mode '<b>collaboratif</b>' permet de créer de graphes
    à plusieurs en même temps et se base sur le principe du chat :
    les informations que vous saisissez sont copiées temporairment
    sur le serveur et envoyées à tous les participants connectés en mode collaboratif.
    Il est possible de créer des graphes indépendant correspondant aux salles
    (room) dans la logique chat.<br>
    Le mode global est utilisé pour interagir avec des sources de données
    RDF/Sparql telles que Wikipédia/dBpedia, Persée, Semantic Forms... (ou votre propre serveur Fuseki/Sparql)<br>
    <br>
    En cas d'interrogations, nos équipes seront ravies de répondre à vos questions : <br>
    <p>mail : <a href="mailto:scenaristeur@gmail.com">scenaristeur@gmail.com</a></p>
    <p>twitter : <a href="http://twitter.com/Dfaveris" target="_blank">@Dfaveris</p>
    </p>
    </section>
    `;
  }
}

window.customElements.define('smag-spoggy', SmagSpoggy);
