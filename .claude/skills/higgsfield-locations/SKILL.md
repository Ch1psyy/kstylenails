---
name: higgsfield-locations
description: Rooms and locations on Higgsfield that look like real places on a film set, made straight in Soul Cinema from one prompt and then used as the location reference for Seedance video. Use it when the user asks for a room, an interior, a set, a corridor, a crypt, a street or any empty location, or wants to put a character or creature "in this place".
---

# Locations

The goal: an **empty location that looks photographed**, ready to be the place where a character or creature is filmed.

It works in a Claude chat with Higgsfield MCP connected. Model: `soul_cinematic` (Soul Cinema), 2k.

## The rule for rooms

Creatures and props are built on a grey clay sculpt. **Rooms are the exception: skip the clay.**

A clay room comes out too perfect: straight lines, everything centred, video-game geometry. In a video the room is most of what you see, so if the room looks fake, the whole clip looks fake.

So a location goes straight to Soul Cinema: the same description, **one prompt, no clay, no references**. What you want from the result: nothing lines up perfectly, the padding sags, there is dust ground into the floor, and things look as if somebody actually put them there by hand.

## How to run it

1. Take the user's description of the place. If it is one line, design the room first: its shape, one landmark, what is on the walls, what the light comes from.
2. Write one prompt with the seven blocks below, in this order.
3. Generate in `soul_cinematic`. Make two takes and pick by eye.
4. Check it (the list at the end). If it fails, rewrite one block and run it once more.
5. When the location goes into a video, tell the video model exactly what to take from it (the last section).

## The seven blocks of a location prompt

1. **What it is and its shape.** Start with `A photorealistic live-action film still of an empty location:` and name the place. Then the geometry in plain words: the cross-section, the floor, the walls, the ceiling, how many bays or sections, what closes the far end.
2. **The landmark and the walls.** One thing the eye goes to (a door, an altar, a window, a machine), described part by part. Then what repeats along the walls, and the materials with their wear: seams, bolt heads, scuffs, a film of water on the floor.
3. **The camera.** Where it stands, at what height, which way it is turned. Where the landmark sits in the frame and how big it is. What fills the rest of the frame. A slight tilt if the shot needs one. `Natural proportions.`
4. **The light.** Only from the location's own fixtures. Which ones are on and which are off, what is the brightest part of the frame, small accent lights, the exposure (`dim low-key exposure, clear air`), reflections on the floor.
5. **The lens.** The lens character (for example a medium anamorphic look), where the focus is, what falls out of focus, how detail falls off towards the edges. `No added flare streaks, no uniform blur border.`
6. **The colour.** The shadows, the main surfaces, the light, and the one warm or bright accent.
7. **Empty.** `The <place> is unoccupied: no people, no figures behind the windows, no human reflections, no readable lettering. One continuous image.`

Write each block as its own paragraph. Describe what is there; don't pile up style words.

## A worked example

```
A photorealistic live-action film still of an empty location: a long service corridor in a futuristic research facility. It is a straight, symmetrical tunnel with an elongated octagonal cross-section: flat floor, lower wall panels slanting outward as they rise, vertical mid walls, upper panels slanting inward to a flat ceiling strip. Five identical bays divided by dark-edged ribs lead to a flat bulkhead with a closed double door in its centre.

The double door is the landmark: two leaves, each with two tall octagonal off-white panels, one above the other, in dark teal-grey frames. A small caged lamp is lit cool white on the bulkhead above the door. Both long walls are identical, mirrored across the centre line: in every bay each wall has a wide rounded-rectangle window in a deep grey moulded frame onto a dim chamber of large grey tiles, a dull yellow tubular handrail below the windows, grey switchgear boxes between them and black cables under the upper slanted panel. The panels are moulded composite with dark seams, bolt heads and light scuffs; the floor is sealed plate under a thin film of water.

Three-quarter view down the tunnel: the camera stands inside the corridor at the end opposite the door, left of the centre line, at standing eye level above the handrails, turned slightly to the right. The closed double door stands frontal in the left third of the frame, complete, about a quarter of the frame height. The left wall is steeply foreshortened into a narrow band; the right wall fills the right half of the frame and sweeps from the foreground into the distance, each bay narrower than the one before. Windows, handrails, cables and lanterns on both walls converge on the door. The camera is rolled about five degrees, a slight Dutch tilt, so the floor line and the verticals lean a little. Natural proportions.

Light comes only from the corridor's own fixtures: one recessed rectangular panel per bay in the ceiling strip. The panels of the two bays nearest the camera are off, so the near part of the corridor is a step darker. The far panels are lit, each with a soft pool on the wet floor, and the last one together with the lamp above the door makes the door end the brightest part of the frame. One small amber lantern stands on the floor at the foot of each rib along both walls. Dim low-key exposure, clear air, long broken reflections on the floor.

Medium anamorphic lens character in the final de-squeezed image, with natural scene proportions. Focus is on the double door and the far bays. The nearest bay falls softly out of focus, and the near amber lanterns become clear vertical oval bokeh. Fine detail falls off moderately toward the frame edges and corners, with gentle curvature of straight lines only near the frame borders and moderate corner vignetting. No added flare streaks, no uniform blur border.

Colour: shadows and the floor near-black with a slight green tint, panels cool off-white falling to grey-green away from the light, ceiling light cool white, the small amber lanterns the only warm accent.

The corridor is unoccupied, the centre of its floor clear along its whole length: no people, no figures behind the windows, no human reflections, no readable lettering. One continuous image.
```

## Check the location

1. Is it a photo of a place or a render? Nothing lines up perfectly; surfaces show wear, dust and use.
2. One clear landmark, and you can say where it sits in the frame.
3. The light comes from fixtures you can see or place.
4. It is empty: no people, no figures, no readable text.
5. The floor is clear where the character will stand or move.

## Using the location in a video

Give the video model (Seedance 2.5, `seedance_2_5`) two images: the character photo and the location still. Then say exactly what each one is for:

- The whole place: `Use image 1 for the character. From image 2 take only the place.`
- One element of it: `From image 2 take only the exit door with the lamp above it. Isolate the door from everything else in that image: no corridor, walls, floor, ceiling lights, windows or handrails.` Then say how big and how far that element is in the new scene.
- Say what the character keeps and drops from its own photo: `Do not take its wall, floor, flash lighting, hard shadow or pose.`

Draft the shot at 480p first, pick a take, then finalize that take in 4K.
