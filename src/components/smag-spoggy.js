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
    Spoggy est une interface de partage d'informations.
    Basée sur le principe des cartes mentales (on créé un noeud pour chaque concept et établit ensuite les liens entre ces concepts),
    Spoggy permet d'enregistrer facilement les idées qui nous passent par la tête pour ensuite les exporter et les partager par mail.
    Parmi les autres possibilités qu'offre Spoggy : confection de cartes multi-utilisateurs en mode collaboratif
    Spoggy permet également d'interagir de visualiser des données issues d'enpoint Sparql... d'en insérer...
    </p>
    </section>
    <section>
    <h2>Creation de graphe, import, export</h2>
    <p>Pour créer un graphe dans Spoggy, rien de plus simple. Rendez-vous à l'adresse
    <a href="http://spoggy.herokuapp.com" target="_blank">http://spoggy.herokuapp.com</a>
    <small>( le chargement peut paraître long si le serveur est en veille )</small>.
    <br>
    Une fois l'interface chargée, vous avez deux possibilités pour remplir le graphe :
    <ol>
    <li>
    La méthode simple
    </li>
    <li>
    la méthode rapide
    </li>
    </ol>
    </p>
    </section>
    <section>
    <h2>Création de graphe, la méthode simple</h2>
    <p>
    La méthode la plus simple consiste à utiliser le bouton <b>'Editer'</b>.<br>
    Cliquez dessus, et cliquez ensuite sur <b>'Ajouter un noeud'</b>,
    puis comme indiqué, cliquez dans l'espace de travail, dans un endroit vide.
    Une fenêtre devrait alors s'ouvrir afin que vous puissiez donner un nom au noeud que vous êtes en train de créer.<br>
    Indiquez un nom, par exemple <b>'Garfield'</b> et validez en cliquant sur <b>'OK'</b>.<br>
    Voilà, vous avez créé votre premier élément du graphe.<br><br>
    Renouvelez la procédure pour créer un deuxième noeud de la même manière, mais cette fois, nommez-le <b>'Chat'</b>.<br><br>
    Pour relier les deux noeuds, cliquez sur <b>'Ajouter un lien'</b>, puis comme indiqué,
    cliquez sur le noeud <b>'Garfield'</b> et <u>glissez votre souris tout en maintenant le clic</u>, jusqu'au noeud <b>'Chat'</b>.
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
    <h2>Création de graphe, la méthode rapide</h2>
    <p>
    La méthode rapide consiste à utiliser le concept de triplet directement,
    mais elle est un peu plus technique, il faut faire attention au dernier charactère saisi ainsi qu'aux espaces! <br>
    Pour la méthode rapide, on va utiliser le champ de saisie tout en haut,
    là où est écrit <b>"3 mots, une virgule et Entrée".</b><br>
    Insérez maintenant votre triplet <b>Titi type Canari,</b><br><br>
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
    <p>Vestibulum at est ex. Aenean id ligula id nibh dictum laoreet. Etiam non semper erat. Pellentesque eu justo rhoncus diam vulputate facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam feugiat metus ex, vel fringilla massa tincidunt sit amet. Nunc facilisis bibendum tristique. Mauris commodo, dolor vitae dapibus fermentum, odio nibh viverra lorem, eu cursus diam turpis et sapien. Nunc suscipit tortor a ligula tincidunt, id hendrerit tellus sollicitudin.</p>
    </section>
    `;
  }
}

window.customElements.define('smag-spoggy', SmagSpoggy);
