<template>
    <content-card>
      <h1>1. Über AI Revolution auf Wait but Why von Tim Urban</h1>
      <ol>
        <li>
          <strong>Narrow Intelligence (ANI)</strong>
          <br />
          Sometimes referred to as Weak AI, Artificial Narrow Intelligence is AI
          that specializes in one area. There’s AI that can beat the world chess
          champion in chess, but that’s the only thing it does. Ask it to figure
          out a better way to store data on a hard drive, and it’ll look at you
          blankly.
        </li>
        <br />

        <li>
          <strong>General Intelligence (AGI)</strong>
          <br />
          Sometimes referred to as Strong AI, or Human-Level AI, Artificial
          General Intelligence refers to a computer that is as smart as a human
          across the board—a machine that can perform any intellectual task that
          a human being can. Creating AGI is a much harder task than creating
          ANI, and we’re yet to do it. Professor Linda Gottfredson describes
          intelligence as “a very general mental capability that, among other
          things, involves the ability to reason, plan, solve problems, think
          abstractly, comprehend complex ideas, learn quickly, and learn from
          experience.” AGI would be able to do all of those things as easily as
          you can.
        </li>
        <br />
        <li>
          <strong>Superintelligence (ASI)</strong>
          <br />
          Oxford philosopher and leading AI thinker Nick Bostrom defines
          superintelligence as “an intellect that is much smarter than the best
          human brains in practically every field, including scientific
          creativity, general wisdom and social skills.” Artificial
          Superintelligence ranges from a computer that’s just a little smarter
          than a human to one that’s trillions of times smarter—across the
          board. ASI is the reason the topic of AI is such a spicy meatball and
          why the words “immortality” and “extinction” will both appear in these
          posts multiple times.
        </li>
      </ol>
    </content-card>
</template>

<script>
import ContentCard from './ContentCard.vue';
export default {
  components: { ContentCard },
  name: "Section1Component",
};
</script>

<style scoped>
h1 {
  font-size: 1.5em;
  text-align: left;
}

p,
li {
  font-size: 1em;
  text-align: left;
}
</style>
