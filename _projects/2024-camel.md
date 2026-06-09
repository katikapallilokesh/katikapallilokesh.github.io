---
layout: project
title: "CAMEL: Class-Aware Medical Vision-Language Alignment"
usemathjax: true
---

<script>
  MathJax = {
    tex: {
      inlineMath: [['$', '$'], ['\\(', '\\)']],
      displayMath: [['$$', '$$'], ['\\[', '\\]']],
      tags: 'ams'
    }
  };
</script>
<script async src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js"></script>

<div class="project-container">

  <!-- ─── Problem Statement ─────────────────────────────────────── -->
  <h5 class="project-subtitle">Problem Statement</h5>

  <p class="project">
    Standard contrastive learning frameworks, such as those used in CLIP-style Vision-Language Pretraining (VLP), rely on <b>binary supervision</b>: each image-text pair is either a perfect match (score = 1) or a complete mismatch (score = 0). While effective for generic web-scale image-text alignment, this <b>harsh supervision</b> fails to capture the nuanced semantic relationships between intra- and inter-class samples inherent in the medical domain.
  </p>

  <p class="project">
    In clinical imaging, diseases often exhibit overlapping visual or textual characteristics. For instance, pneumonia and COVID-19 both present with diffuse opacities in chest radiographs. Standard contrastive loss treats such semantically related pairs as <b>hard negatives</b>, forcing their embeddings apart despite shared pathological features. This rigid separation results in a loss of <b>fine-grained clinical structure</b> in the learned representation space, limiting the model's ability to capture subtle diagnostic distinctions.
  </p>

  <p class="project">
    We address this with two contributions: (1) <b>C-CAS</b> — a class-aware soft similarity metric that assigns continuous alignment targets reflecting semantic relatedness, and (2) <b>C-CAP</b> — a pretraining framework that uses C-CAS targets as supervision, replacing binary cross-entropy with soft alignment objectives. Together, these enable the model to distinguish subtle disease-specific patterns while maintaining awareness of shared clinical features, without relying on external knowledge bases or specialized feature extractors.
  </p>


  <!-- ─── Patient Profile Generation ───────────────────────────── -->
  <h5 class="project-subtitle">Patient Profile Generation</h5>

  <p class="project">
    A key challenge in medical VLP is the scarcity of paired image-text data. To address this, we construct patient profiles by pairing lesion images with structured clinical metadata, then employ <b>mPLUG-Owl3</b> to generate clinically grounded narrative reports. Each profile combines visual observations (morphology, color, texture) with patient context (age, anatomical site, symptoms), yielding rich supervision signals that go far beyond simple diagnostic labels.
  </p>

  <!-- Patient profile samples -->
  <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 16px; margin: 1.5rem 0;">

    <!-- Profile card 1 -->
    <div style="border: 0.5px solid #d3d1c7; border-radius: 10px; overflow: hidden; font-size: 0.85em;">
      <div style="background: #f1efe8; padding: 10px 14px; display: flex; align-items: center; gap: 10px;">
        <div style="width: 36px; height: 36px; border-radius: 50%; background: #b5d4f4; display: flex; align-items: center; justify-content: center; font-weight: 500; font-size: 13px; color: #0c447c; flex-shrink: 0;">F/52</div>
        <div>
          <div style="font-weight: 500; color: #2c2c2a;">Squamous Cell Carcinoma</div>
          <div style="color: #888780; font-size: 0.82em;">Lower leg · 3.2 cm · 14 months</div>
        </div>
      </div>
      <div style="padding: 12px 14px; color: #5f5e5a; line-height: 1.55;">
        Irregular, keratinizing plaque with central ulceration and raised indurated borders. Pearly, erythematous surface with focal crusting. Surrounding skin shows actinic damage. History of chronic sun exposure and prior actinic keratoses.
      </div>
    </div>

    <!-- Profile card 2 -->
    <div style="border: 0.5px solid #d3d1c7; border-radius: 10px; overflow: hidden; font-size: 0.85em;">
      <div style="background: #f1efe8; padding: 10px 14px; display: flex; align-items: center; gap: 10px;">
        <div style="width: 36px; height: 36px; border-radius: 50%; background: #9fe1cb; display: flex; align-items: center; justify-content: center; font-weight: 500; font-size: 13px; color: #085041; flex-shrink: 0;">M/34</div>
        <div>
          <div style="font-weight: 500; color: #2c2c2a;">Melanoma</div>
          <div style="color: #888780; font-size: 0.82em;">Back · 1.8 cm · 6 months</div>
        </div>
      </div>
      <div style="padding: 12px 14px; color: #5f5e5a; line-height: 1.55;">
        Asymmetric pigmented lesion with irregular notched border and variegated coloration: brown, black, and focal areas of regression (grey-white). Recent rapid growth reported. Family history of melanoma. Fitzpatrick type II.
      </div>
    </div>

    <!-- Profile card 3 -->
    <div style="border: 0.5px solid #d3d1c7; border-radius: 10px; overflow: hidden; font-size: 0.85em;">
      <div style="background: #f1efe8; padding: 10px 14px; display: flex; align-items: center; gap: 10px;">
        <div style="width: 36px; height: 36px; border-radius: 50%; background: #f4c0d1; display: flex; align-items: center; justify-content: center; font-weight: 500; font-size: 13px; color: #72243e; flex-shrink: 0;">F/67</div>
        <div>
          <div style="font-weight: 500; color: #2c2c2a;">Basal Cell Carcinoma</div>
          <div style="color: #888780; font-size: 0.82em;">Nose · 0.9 cm · 24 months</div>
        </div>
      </div>
      <div style="padding: 12px 14px; color: #5f5e5a; line-height: 1.55;">
        Translucent pearly nodule with rolled borders and arborising telangiectasia over the nasal ala. Central depression with intermittent bleeding. Patient reports previous BCC excision on the cheek. Long-term immunosuppression post-transplant.
      </div>
    </div>

    <!-- Profile card 4 -->
    <div style="border: 0.5px solid #d3d1c7; border-radius: 10px; overflow: hidden; font-size: 0.85em;">
      <div style="background: #f1efe8; padding: 10px 14px; display: flex; align-items: center; gap: 10px;">
        <div style="width: 36px; height: 36px; border-radius: 50%; background: #fac775; display: flex; align-items: center; justify-content: center; font-weight: 500; font-size: 13px; color: #633806; flex-shrink: 0;">M/45</div>
        <div>
          <div style="font-weight: 500; color: #2c2c2a;">Seborrheic Keratosis</div>
          <div style="color: #888780; font-size: 0.82em;">Trunk · 2.1 cm · 5 years</div>
        </div>
      </div>
      <div style="padding: 12px 14px; color: #5f5e5a; line-height: 1.55;">
        Well-demarcated, waxy, "stuck-on" brown plaque with a verrucous surface and visible comedone-like openings. Sharply defined borders. Lesion is stable in size with no reported pruritus or bleeding. Benign appearance consistent with age-related presentation.
      </div>
    </div>

  </div>

  <p class="project" style="text-align: center;">
    Samples of patient profiles with synthetically generated clinical narratives using mPLUG-Owl3.
  </p>


  <!-- ─── Synthetic Report Generation ──────────────────────────── -->
  <h5 class="project-subtitle">Synthetic Report Generation</h5>

  <p class="project">
    While this approach is domain-agnostic and applicable to any medical image-text pairing, we demonstrate its effectiveness in dermatology using synthetically generated clinical reports. To address the scarcity of paired dermatological image-text data, we employ mPLUG-Owl3, a state-of-the-art vision-language model, to generate clinically grounded narratives from lesion images and patient metadata. Unlike simple diagnostic labels or generic descriptions, these synthetic reports capture the richness of clinical language, incorporating visual observations (e.g., morphology, color, texture) alongside contextual patient information (e.g., age, location, symptoms). This process yields a high-quality training corpus that provides stronger supervision signals while maintaining clinical realism and diagnostic relevance.
  </p>

  <div id="samples-player" class="samples-player project">
    <div class="sample-row">
      <div class="class-col">
        <div class="class-wrap">
          <span id="class-label"></span>
        </div>
      </div>
      <div class="image-col">
        <div class="image-wrap">
          <img id="sample-image" src="" alt="Sample image" />
        </div>
      </div>
      <div class="symptom-col">
        <div class="symptom-wrap">
          <div id="symptom-text" class="symptom-text"></div>
        </div>
      </div>
    </div>
  </div>

  <script src="{{ '/libs/custom/samples-player.js' | prepend: site.baseurl }}"></script>
  <link rel="stylesheet" href="{{ '/libs/custom/projects-samples.css' | prepend: site.baseurl }}">

  <p class="project" style="text-align: center;">
    Samples of synthetic dermatology reports generated using mPLUG-Owl3.<br>
  </p>


  <!-- ─── Method ────────────────────────────────────────────────── -->
  <h5 class="project-subtitle">Method</h5>

  <p class="project">
    To capture the nuanced relationships between semantically related medical samples, we propose two complementary components: <b>C-CAS</b> (Class-aware Contrastive Alignment Score) for computing soft similarity targets, and <b>C-CAP</b> (Class-aware Contrastive Alignment Pretraining) for optimising the vision-language encoder using those targets.
  </p>

  <!-- C-CAS subsection -->
  <h6 class="project-subtitle" style="font-size: 0.95em; margin-top: 1.2em;">C-CAS: Soft Similarity Targets</h6>

  <p class="project">
    Unlike standard contrastive learning that treats all non-matching pairs as equally dissimilar, C-CAS computes soft alignment targets by combining three complementary signals:
  </p>

  <div class="project-equation">
    $$
    \mathrm{C\text{-}CAS}_{i,j} \;=\; \alpha\,\mathrm{Sim}(T_i,T_j) \;+\; \beta\,\mathrm{Sim}(I_i,I_j) \;+\; \gamma\,\mathrm{\sum_k}(C_i \land C_j)
    $$
  </div>

  <p class="project">
    where $\mathrm{Sim}(T_i, T_j)$ represents the cosine similarity between text embeddings, $\mathrm{Sim}(I_i, I_j)$ between image embeddings, and $\sum_k(C_i \land C_j)$ counts shared class labels between samples $i$ and $j$. The hyperparameters $\alpha, \beta, \gamma$ balance the contribution of each component. This formulation encodes both visual and textual consistency while explicitly incorporating class structure, enabling the model to distinguish hard negatives (e.g., visually similar but distinct diseases) from semantically related pairs (e.g., different manifestations of the same condition).
  </p>

  <!-- C-CAP subsection -->
  <h6 class="project-subtitle" style="font-size: 0.95em; margin-top: 1.2em;">C-CAP: Class-Aware Contrastive Alignment Pretraining</h6>

  <p class="project">
    C-CAP uses the C-CAS targets as continuous supervision during pretraining. Given a batch of $N$ image-text pairs, we extract image embeddings $\mathbf{I}_i$ and text embeddings $\mathbf{T}_j$ from their respective encoders, then compute pairwise cross-modal similarities $S_{i,j} = \mathrm{cosine}(\mathbf{I}_i, \mathbf{T}_j)$. The pretraining objective minimises the mean squared error between predicted similarities and C-CAS targets:
  </p>

  <div class="project-equation">
    $$
    {\mathcal{L}_{\text{C-CAP}} \;=\; \frac{1}{N^2} \sum_{i=1}^{N} \sum_{j=1}^{N} \left( S_{i,j} - \mathrm{C\text{-}CAS}_{i,j} \right)^2}
    $$
  </div>

  <p class="project">
    This soft alignment objective encourages the encoders to produce embeddings that reflect not only exact matches but also the degree of semantic relatedness across samples. Compared to binary cross-entropy used in standard CLIP, C-CAP avoids over-penalising semantically related pairs by assigning them intermediate targets rather than forcing them to zero similarity. By replacing binary supervision with continuous, class-aware targets, CAMEL addresses the coarse-grained alignment limitations of standard CLIP-based methods, resulting in representations that preserve fine-grained clinical structure and improve generalisation across diagnostic tasks.
  </p>

  <figure style="text-align:center; margin: 20px 0;">
    <img src="{{ '/assets/projects/2024-camel/framework.svg' | prepend: relative_url }}"
         alt="Framework of C-CAS and C-CAP"
         style="width:70%; max-width:900px;">
    <figcaption style="font-size:0.9em; color:#555;">
      <b>Figure:</b> Overview of the proposed <b>C-CAS</b> (Class-aware Contrastive Alignment Score) and
      <b>C-CAP</b> (Class-aware Contrastive Alignment Pretraining) frameworks.
      C-CAS computes intra-modal cosine similarities and class alignment to form a
      weighted soft target matrix, while C-CAP learns to align multimodal representations
      using these targets as continuous supervision.
    </figcaption>
  </figure>


  <!-- ─── References ────────────────────────────────────────────── -->
  <h5 class="project-subtitle">References</h5>
  <ol class="project">
    <li>Learning Transferable Visual Models from Natural Language Supervision. ICML, 2021</li>
    <li>MPLUG-OWL3: Towards Long Image-Sequence Understanding in Multi-Modal Large Language Models. 2024</li>
    <li>PAD-UFES-20: A Skin Lesion Dataset Composed of Patient Data and Clinical Images Collected from Smartphones. Data in Brief, 2020</li>
  </ol>

</div>