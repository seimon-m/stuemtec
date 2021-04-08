<template>
    <section-wrapper>
        <div class="header">
            <h2>Auftrag im Unterricht</h2>
        </div>
        <content-card>
            <p>Wählt eine der zwei aktuelle Autoren über KI</p>
            <ol>
                <li>
                    <a href="">Tim Urban</a>
                </li>
                <li>
                    <a href="">Max Tegmark</a>
                </li>
            </ol>
            <p>Tragt ein, welchen Autor ihr Ausgewählt habt</p>
        </content-card>
    </section-wrapper>
    <section-wrapper>
        <content-card>
            <h3>Tim Urban</h3>
            <p>Liest folgende Texte (Teil 1+2) (ca. 1 Stunde)</p>

            <link-prevue
                url="https://waitbutwhy.com/2015/01/artificial-intelligence-revolution-1.html"
            ></link-prevue>

            <link-prevue
                url="https://waitbutwhy.com/2015/01/artificial-intelligence-revolution-2.html"
            ></link-prevue>
            <p>
                oder als Video bis 1h05m:
                <link-prevue
                    url="https://youtu.be/LUvNrm7yrJM?t=26m53s"
                ></link-prevue>
            </p>
        </content-card>
    </section-wrapper>
    <section-wrapper>
        <content-card>
            <h3>Max Tegmark</h3>
            <p>Text und Bilder weiter unten sowie folgende zwei Videos</p>
            <link-prevue
                url="https://www.youtube.com/watch?v=3Om9ssTm194"
            ></link-prevue>
            <link-prevue
                url="https://www.youtube.com/watch?v=1MqukDzhlqA&amp;t=592"
            ></link-prevue>
            <link-prevue
                url="https://www.youtube.com/watch?v=oYmKOgeoOz4"
            ></link-prevue>
            <link-prevue
                url="https://www.youtube.com/watch?v=Gi8LUnhP5yU"
            ></link-prevue>
        </content-card>
    </section-wrapper>
</template>

<script>
import ContentCard from "./ContentCard.vue";
import SectionWrapper from "./SectionWrapper.vue";
import LinkPrevue from "./LinkPrevue.vue";

export default {
    name: "ExerciseComponent",
    components: { ContentCard, SectionWrapper, LinkPrevue },
};
</script>

<style scoped>
.header {
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    position: static;
    width: 50%;
    max-width: 700px;
    height: 100%;
}
</style>
