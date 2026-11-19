---
name: higgsfield-creature-sculpt-pipeline
description: Creatures, monsters and characters on Higgsfield that look like real living things photographed on a film set. Runs the creature-shop pipeline through Higgsfield MCP - a grey clay sculpt for the shape, a real face from Soul, close-up swatches of real materials, then one boring flash photo in Seedream 5.5. Use it when the user asks for a creature, monster, battle beast, alien, undead, hybrid, fairy or any character "through the pipeline", even from one sentence such as "a fairy who's half sea urchin".
---

# Creature Sculpt Pipeline

The goal: the creature looks like **a real living thing photographed on a set**. Not a render, not a figurine, not concept art.

It works in a Claude chat with Higgsfield MCP connected. Models: `seedream_5_5`, `recraft_v4_1`, `soul_2`, `soul_cinematic`. Generate everything at 2k.

## How to run it

The user describes a creature, often in one sentence. Then, without asking for approval between steps:

1. Design the character (section 2). If the user only said "a creature", don't force a job or a prop on it.
2. Pick the track (section 1).
3. Sculpt it in grey clay (section 3).
4. Track A and C only: make the human donor photo in Soul (section 4).
5. Make a swatch for every important material, or reuse swatches already made in this chat (section 7).
6. Skin the clay into one photo in Seedream 5.5 (section 5).
7. Run the final check (section 9). If it fails, rewrite one block of the prompt and run it once more.

Show each result as it lands: the clay, the face, the swatches, the final photo. Earlier results from the same chat are passed on as image references, so the user uploads nothing.

## 1. Pick the track

| Track | Who | Stages |
|---|---|---|
| **A. Humanlike** (has a human face or human skin) | half-human, an old man with animal parts, an orc, an elf | clay, then a human donor from Soul, then the skin pass (clay + donor + swatches) |
| **B. Creature** (no human skin) | an animal character, an object-creature, a mushroom, a fish, an alien | clay, then the skin pass (clay + swatches) |
| **C. Woman or fairy in a costume of natural material** | a fairy, a woman in a dress of shells, feathers, wings | clay, then a donor photo in Soul, then the skin pass (clay + donor + swatches) |

Three rules that hold on every track:

1. **A swatch in every Seedream generation.** At least one close-up of a real material from Soul 2, better two. No fitting swatch yet: make one first.
2. **A human always comes from Soul.** Any human face or skin is a donor photo from `soul_2` or `soul_cinematic`. Seedream on its own draws people waxy.
3. **The weirder the creature, the more boring the photo.** A flash, a plain wall, a hard shadow. No epic light, no fog, no glow.

## 2. Design the character

These are tools to reach for when an idea is needed, not requirements. Any slot can be skipped.

1. **Role**: what it does in its world (judge, matchmaker, tax collector, smith, pilgrim). A role gives props and a pose.
2. **Donor organisms**: two or three exact species. The first gives the head or face (mandrill, shark, owl), the second the covering or the weapon (hyena mane, moose antlers, pangolin scales), a third one detail (bat ears). Not "a lizard" but "a thorny devil". Not "a bird" but "a shoebill".
3. **How the hybrid is joined** (pick one): a replaced part (fists are mantis shrimp claws) · a body that is a home (lives in a bell, a shell) · growth from the body (a wasp nest instead of hair) · the lower half of another species · a whole animal in a human role (a fox merchant) · an object that became an organ · a moult (climbing out of its own old skin) · a parasite or symbiont (moss and moths in the fur).
4. **A trace of its past**: one detail. A scar, a trophy, a patch, a debt.
5. **A pose with presence**: still and superior. Never a T-pose. Ideas: sits on a low stool with elbows on knees · stands with hands in sleeves · both hands on a sword planted in front · looks over the shoulder · squats smoking a long pipe · stares into the lens from under a lowered head · drinks tea without looking at the camera · holds its own mask in its hand · feeds a small creature from its palm.
6. **A palette from nature**: one dominant, one secondary and ONE bright accent, with the colours taken from the real species.
7. **Scale**: its height in metres and one object to compare with (a stool, a cup, a sword).

Quality rules:

- **Silhouette first.** Filled with black, it must read in three seconds. Shape matters more than detail; texture comes last.
- **Big, medium, small.** One large mass, two or three medium ones, a scatter of small ones. Asymmetry is a must.
- **Function.** Every part works: big horns need a thick neck, a digger needs heavy forelimbs. Remove spikes and muscles that do nothing.
- **70/30.** 70% recognisable real anatomy, 30% strange (one way of joining the hybrid).
- **Dignity, not disgust.** Something in an ugly creature is beautiful or sad: a calm face, a careful gesture, a loved object.
- **One focus.** The face and eyes, or one signature object. The bright accent goes there.

Genre notes:

| Genre | Where the donor organism comes from | Must have | Avoid |
|---|---|---|---|
| **Battle beast** | a real species with natural weapons: Hercules beetle, trap-jaw ant, bombardier beetle, snapping turtle, honey badger, elephant seal, Komodo dragon | a battle role (ram, shield bearer, siege beast), harness and weapons of old iron, wood and leather, traces of fights (arrows in the hide, scars, notches) | spikes with no function, "a demon with horns", clean armour |
| **Alien** | sea and soil invertebrates the viewer doesn't recognise: brittle star, siphonophore, cuttlefish, nautilus, velvet worm, glass sponge, sea spider, slime mould | non-human symmetry (five rays, a colony, no head) and ONE human thing (a ribbon, a jacket, a helmet) that gives scale and a role | a humanoid with a big head, the little grey man, glowing eyes |
| **Undead** | the way the body was preserved: drowned, frozen, a bog, salt, ash, terracotta, mycelium, roots | track A: a human donor from Soul, one line on the state of the body, a swatch of the preserving material; a calm face and one personal object | fresh blood, wounds for the sake of wounds |
| **Dark epic fantasy** (orcs, goblins, trolls, dwarves, elves) | a mood, not the heroes of an existing franchise | the donor's face plus a skin swatch (hippo hide works for orc skin), an original silhouette, headgear, weapon and trade | a rubber mask look, costume ears, any design that copies a known character |

The "expensive film" test: the frame answers three questions. **What does it work or kill with, what has already happened to it, whose is it** (a harness, a brand, a banner, a uniform). No answer: add the detail to the sculpt.

## 3. Stage 1: the grey clay sculpt (text to image)

Alternate the three models inside one batch to get different "handwriting" in the shape:

- `seedream_5_5`: exact anatomy and costume. The default, and the choice for complicated creatures and giants.
- `recraft_v4_1`: clean, readable shapes. Add `realistic not cartoon`. Round, cute creatures drift towards cartoon here.
- `soul_2`: the best human faces and poses. It simplifies unusual anatomy (extra legs, horns). Start the prompt with `ZBrush digital sculpture render, unpainted matte grey clay statue of ...`.

Format: a waist-up bust in `16:9` when the hook is in the face. Full body in `3:4` for fairies and for anyone whose whole costume matters. `4:3` for wide four-legged animals. The skin pass uses the same format as the sculpt.

```
ZBrush digital sculpture render of a <NAME IN CAPITALS>: <who it is and the pose>, <the face; for track A write "clearly visible human face">, <how the hybrid is joined, in detail>, <two or three props of its role>. Waist-up bust, front view facing the camera, figure fills the frame. Whole figure one unpainted matte grey clay material, no color, extreme sculpted detail, single figure, one view, no base, no text, soft key light and rim light, pure black background
```

- For a full figure, replace `Waist-up bust, front view facing the camera, figure fills the frame` with `Full body, three-quarter front view, strong silhouette, figure fills the frame, realistic life-size proportions`.
- `single figure, one view` is required, or `soul_2` makes a turnaround of two figures.
- Name no colours in the sculpt: the model paints the clay.
- A small figure in the frame (a snake, a salamander): add `large in frame, filling the frame`.
- For a second pose or a three-view sheet of the same creature, pass the first sculpt as an image reference and write `the same creature exactly` plus the new pose or `three views of the same figure side by side on one sheet`.

Check the sculpt: the silhouette reads, the face is visible, one grey material, the hybrid joint is there. If it fails, rewrite the description. Don't rerun the same prompt.

## 4. Stage 2: the human donor (tracks A and C)

Make the person separately in Soul and graft them in. `soul_2` gives natural faces; `soul_cinematic` gives more character but sometimes tips into caricature. Format `2:3`, 2k. The donor is shot under the same flash as the final photo:

```
phone flash photo, head and shoulders portrait of <age, ethnicity, three or four facial features, hair or beard, clothes>, natural face proportions, standing close against a dark charcoal grey wall, direct on-camera flash, hard shadow on the wall, real skin texture, pores, slight noise
```

- The donor matches the sculpt in age, build, emotion and facial hair. One donor, one character.
- Look at the result before using it: a crooked nose, a strange mouth or extra teeth means make another.
- For a creature with an animal face (track B), make a photo of the real animal the same way: `a real <species>, photographed like a wildlife shot`. Its skin, nose and wrinkles go onto the face.
- Adults only, and only original people: never the face of a real, named person.

## 5. Stage 3: the skin pass (`seedream_5_5`, 2k)

Image references in this order: **image 1 the sculpt**, **image 2 the donor** (tracks A and C), then **the swatches**. Up to six pictures work. Say in the prompt what each picture is for.

```
Image 1 is the base: keep pose, proportions, composition and structure exactly. Turn the grey sculpture into a real photo of <who it is>.
[His/Her face, skin and hair are exactly the real person from image 2: the same face, real skin, pores.]
<Part> is the real <material> from image N: <colour, texture, wear>.
<Other parts>: real <exact species>, <colour>, <texture>, <wear: wet, dry, muddy, scratched, faded>.
<Clothes and props, old and worn, in exact materials>. <One accent> is the only bright colour.
<The photo block, see below.>
```

Rules for this prompt:

- **Every picture gets one job.** Shape from the clay, face from the donor, each swatch to one named part.
- **Lock the shape.** Name every feature that was sculpted (the brow, the tusks, the beard), so nothing drifts.
- **Map the materials.** Every material gets a body part and a picture. Leave that out and the model guesses where each one goes.
- **Write in what the clay never had.** Armour, trophies and small details can live only in the prompt, so the clay doesn't have to be perfect.
- Name a material by its species: "real giant centipede chitin", not "scales".
- Each part gets three things: a colour, a texture and wear.
- Three families of texture in one character: hard (chitin, horn, bronze), soft (skin, fur, cloth), wet or translucent (slime, membrane, an eye).
- A mixed face: list what comes from the person (eyes, forehead, skin) and what from the animal, and add that the fur or scales grow naturally out of the skin.
- A sculpt from `soul_2` can look like a toy: write `Turn the statue into a real photo` and add `statue` to the negatives.
- A base or a caption in the sculpt: write `remove the base` or `remove all text from the frame`.
- Fairies and women: the header says `keep pose, composition and costume structure exactly, with realistic adult body proportions`, the body says `The costume is real and hand-made, with uneven edges and wear, and fully covers chest and hips`. Take the face, skin and hair from the donor; the costume and the pose come from the sculpt. One skin pass only: repeats lower the quality of the face.
- Undead: right after the line about image 2, describe the state of the body (drowned long ago, frozen for thousands of years: skin colour, eyes, lips). The face stays the donor's face; only its state changes.

### The photo block

Two modes. Changing the mode changes only this block; the sculpt, the donors and the swatches stay.

**Makeup test** (a staged test on a film set; for casting sheets and clean presentation):

```
A practical-effects makeup test photo: direct frontal flash, dark grey seamless backdrop paper, the flash throws a hard, clear shadow on the paper, uneven light. A real camera, shallow depth of field. No highlights, reflections, gloss or oily shine. No clay, sculpture, CG render, illustration or game-model look.
```

**Phone snapshot** (a casual flash photo; the default when maximum realism is needed):

```
Photo: casual phone flash snapshot in a dim room, subject standing on a worn concrete floor close against a dark charcoal grey wall, hard frontal flash, sharp black shadow on the wall, fast falloff, slight noise, natural unsaturated colours, not cinematic. Real life-size, pores, stray hairs, dust and small asymmetries visible. No sculpture, clay, plastic, CG, 3D render, toy or illustration look, no glow. Do not change pose or composition.
```

What does the work: `casual snapshot`, `not cinematic`, `slight noise`, `unsaturated`, and wear and dirt on every material. Soft light and a black background with no wall turn the frame into a CG render.

**Giants and battle beasts:** set the place as `in a dim concrete warehouse` and give the scale with an everyday object: `An ordinary grey plastic chair by the wall shows its huge real size` (or a steel door, pipes under the ceiling). Add `miniature, figurine, diorama, no studio backdrop` to the negatives. State the height in the first line ("two metres tall"). For humanlike figures that read as figurines, ask for the whole body sharp from head to toe, deep depth of field, a 35mm lens, no macro blur.

## 6. Fixes

| Problem | Cause | Fix |
|---|---|---|
| The person looks waxy | Seedream invents the skin | a donor from Soul as image 2 |
| It looks like a figurine on a shelf | dark background, soft light, no scale | the photo block, "real life-size", an object for scale |
| Everything is brown, characters look alike | no palette | colours from the real species plus one accent |
| Plastic texture | the material is named in general words | an exact species, wear, and a swatch |
| A T-pose, a statue with arms out | no pose in the sculpt | a pose with presence in stage 1 |
| The face is covered by wings or horns | not stated | `clearly visible ... face`, wings `behind, not covering` |
| The hybrid didn't fuse (the eagle sits next to the arm) | the model picks the familiar | in the sculpt: `grows out of / fused / instead of` |
| Two figures, a turnaround | `soul_2` | `single figure, one view` |
| A cartoon sculpt | `soul_2`, `recraft_v4_1` | rerun in `seedream_5_5` with `realistic animal proportions, life-size, not a figurine, no base` |
| The creature is small in the frame | a long body in 16:9 | `large in frame`, format 4:3 |
| A caption or text in the frame | `recraft_v4_1` signs the sculpt | `no text, no caption` in the sculpt, `remove all text` in the skin pass |
| Bones as clean as a teaching aid | no dirt and no age | an old-bone swatch plus `yellowed, porous, cracked, earth-stained` |
| A fairy looks like a party costume | a direct photo from Soul with no sculpt | track C: sculpt, Soul donor, Seedream with swatches |
| The donor is a caricature | `soul_cinematic` overdoes the character | take the `soul_2` version |
| A generation is refused | the costume isn't described, or the design is too close to a known character | describe a costume that covers the whole torso; change the design itself: another silhouette, headgear, weapon, trade |

## 7. Material swatches

A swatch is an extreme close-up of a real material, made in `soul_2`, 1:1, 2k. Make it once and reuse it for every creature in the chat.

```
extreme macro photograph of real <material> filling the whole frame edge to edge, <colour, texture, wear>, hard direct flash, sharp focus, real texture, no text
```

Materials that are proven to work (the library behind this skill has 192 of them):

- **Skin and hide:** toad skin, octopus skin with suckers, crocodile back, anglerfish skin, rhino hide, elephant skin, hippo hide (works for orc skin), old man's skin, mandrill face skin, shark skin, bare vulture skin, Komodo dragon skin, iguana skin, chameleon skin, cuttlefish skin, moray eel skin, catfish skin, pike skin, narwhal skin, giant salamander, axolotl, glass frog, poison dart frog, starfish skin, scar tissue.
- **Fur and hair:** snow leopard, yak wool, spotted hyena, polar bear, grey wolf, brown bear, red fox, wild boar hide, tiger, jaguar, seal, flying fox, Highland cattle hair, long goat hair, okapi hide, wet black hair, a red beard in braids with rings.
- **Feathers and wings:** peacock, raven, golden eagle, barn owl, hummingbird, swan, mandarin duck, frigatebird, flamingo, city pigeon, cassowary, bat wing membrane, emperor moth wing, luna moth wing, morpho wing, monarch wing, dragonfly wing, cicada wings.
- **Scales, shell and chitin:** pangolin scales, koi scales, black arowana scales, Gaboon viper, king cobra, albino python, thorny devil, armadillo shell, coconut crab shell, boiled lobster shell, hermit crab claw, mantis shrimp, nautilus shell, giant snail, sea urchin, mother-of-pearl, centipede chitin, hornet chitin, rhinoceros beetle, Hercules beetle, jewel beetle wing cases, praying mantis, emperor scorpion, locust, cicada shells.
- **Bone, horn and tooth:** old bone, walrus tusk, moose antler, ibex horn, boar tusks on a cord, toucan beak, porcupine quills.
- **Flesh and preserved bodies:** muscle and tendon, dead flesh (grey-green, veins), mummy skin, bog body skin, frozen hide, salt crust, volcanic ash, a rotted shroud.
- **Sea and soil life:** salp jelly, jellyfish tissue, glass sponge, velvet worm, slime mould, nudibranch, scallop mantle with eyes, giant clam mantle, tube worms, barnacle and mussel crust, lionfish fins, pufferfish, gulper eel skin.
- **Plants and fungi:** oak bark with moss and lichen, birch bark, driftwood, charred wood, lingzhi bracket fungus, mycelium and fruiting bodies, hen-of-the-woods, lotus seed pods, lichen, prickly pear, dandelion fluff and burrs, straw cape, straw rope, raffia, honeycomb with bees, wasp nest, termite mound, cocoons and raw silk, golden orb-weaver silk.
- **Stone, metal and made things:** bronze with patina, gilded bronze, brass in coral, rough wrought iron, blued steel with heat tint, rusty chain mail, rusty lamellar armour, scale armour, rusty chains and bells, rusty corrugated sheet, road-sign metal, old tyre tread, obsidian, amethyst geode, bismuth crystal, carved jade, granite with moss, cave flowstone, cracked clay, terracotta with traces of paint, crackled porcelain, gold leaf on wood, silver filigree with moonstone, melted candle wax, frost and ice, pahoehoe lava with sulphur.
- **Cloth and costume:** biker leather, boiled leather armour, black brocade with silver, black kimono silk, embroidered court silk, wool tartan, Andean wool cloth, a grey-green wool cloak, a torn hemp robe, crimson velvet with gold braid, striped circus canvas, waxed raincoat canvas with red dust, old spacesuit fabric, tarnished sequins, a red lacquer mask, a white theatre mask, yellow paper talismans, wooden prayer beads on a red cord, white clay war paint.

**Invented materials** always stand on a real one: a real base plus one shift (the colour of another species, the scale, the stage, an infestation). Chitin with the cracked cobalt pattern of blue-and-white porcelain. Yak wool where every strand is wet moss. Pangolin scales like burnt charcoal with grey ash in the cracks. An old man's skin whose pores are the fine pores of a bracket fungus. Banned: glow, neon, crystals, "magic energy". They kill the photo.

## 8. Working in batches

- No more than 12 requests in one batch.
- Write down the job id of every result as soon as the batch answers: a finished generation's job id works as an image reference in the next step.
- Don't review the sculpts one by one in a large run. Check only the finals.
- If the service answers that generation is busy, send the same items again later.
- If the connection drops in the middle of a batch, look at what has already started before sending anything again.

## 9. The final check, before showing

1. Is it a photo or a render? A dark wall close behind, the flash straight on, a large sharp shadow on the wall.
2. A human face is real (pores, asymmetry) and matches the donor.
3. Three textures can be told apart: hard, soft, wet.
4. One bright accent; the rest are the colours of the real species.
5. The pose and the composition did not drift from the sculpt.
6. Nothing glows, and the costume covers the body.
7. Scale: it reads as a living creature at full size, not a figurine on a table (no base, no macro blur).
8. The film test: you can see what it works or kills with, what happened to it and whose it is.
9. A hybrid shows at least two animals, and at least one swatch went into the generation.

It didn't pass: rewrite one block of the prompt and run it once more.

## Then make it move

A still is easy to fake; the real test is movement. Give Seedance 2.5 (`seedance_2_5`) the finished photo and, if there is one, a still of the location, with a prompt that says what happens second by second. Draft at 480p first (`draft: true`, a few takes), let the user pick a take, then finalize that exact take in 4K with its draft job id. The final keeps the same camera, timing and sound.
