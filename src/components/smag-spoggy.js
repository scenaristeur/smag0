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
    La méthode la plus simple consiste à utiliser le bouton 'Editer'.<br>
    Cliquez dessus, et cliquez ensuite sur 'Ajouter un noeud',
    puis comme indiqué, cliquez dans l'espace de travail, dans un endroit vide.
    Une fenêtre devrait alors s'ouvrir afin que vous puissiez donner un nom au noeud que vous êtes en train de créer.<br>
    Indiquez un nom, par exemple 'Garfield' et validez en cliquant sur 'OK'.<br>
    Voilà, vous avez créé votre premier élément du graphe.<br><br>
    Renouvelez la procédure pour créer un deuxième noeud de la même manière, mais cette fois, nommez-le 'Chat'.<br><br>
    Pour relier les deux noeuds, cliquez sur 'Ajouter un lien', puis comme indiqué,
    cliquez sur le noeud 'Garfield' et glissez votre souris tout en maintenant le clic, jusqu'au noeud 'Chat'.
    Une fois arrivé sur le noeud 'Chat', relachez le clic, une nouvelle fenêtre doit s'ouvrir vous demandant le
    nom du lien.<br> Saisissez alors le mot 'type', et validez par 'OK'. <br>
    Vous venez de créer votre premier triplet...<br>
    Et c'est tout ce dont vous avez besoin pour créer un graphe ! <br>
    Continuez maintenant votre graphe en ajoutant d'autres noeuds et d'autres liens.<br><br>
    A noter : Lorsque vous cliquez sur un noeud ou sur un lien existant,
    les boutons sont modifiés et vous pouvez de cette manière modifier ou supprimer l'élément sur lequel vous avez cliqué.<br><br>
    <a href="/images/garfiled.png" target="_blank"><img src="/images/garfield.png" width="350px", height="350px"></a><br>
    <a href="/images/garfiled2.png" target="_blank"><img src="/images/garfield2.png" width="350px", height="350px"></a>
    </p>
    </section>
    <section>
    <h2>Création de graphe, la méthode rapide</h2>
    <p>Vestibulum at est ex. Aenean id ligula id nibh dictum laoreet. Etiam non semper erat. Pellentesque eu justo rhoncus diam vulputate facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam feugiat metus ex, vel fringilla massa tincidunt sit amet. Nunc facilisis bibendum tristique. Mauris commodo, dolor vitae dapibus fermentum, odio nibh viverra lorem, eu cursus diam turpis et sapien. Nunc suscipit tortor a ligula tincidunt, id hendrerit tellus sollicitudin.</p>
    </section>
    <section>
    <h2>import / export</h2>
    <p>Vestibulum at est ex. Aenean id ligula id nibh dictum laoreet. Etiam non semper erat. Pellentesque eu justo rhoncus diam vulputate facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam feugiat metus ex, vel fringilla massa tincidunt sit amet. Nunc facilisis bibendum tristique. Mauris commodo, dolor vitae dapibus fermentum, odio nibh viverra lorem, eu cursus diam turpis et sapien. Nunc suscipit tortor a ligula tincidunt, id hendrerit tellus sollicitudin.</p>
    </section>
    `;
  }
}

window.customElements.define('smag-spoggy', SmagSpoggy);
