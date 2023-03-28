const modelViewerColor = document.querySelector("model-viewer#normal");
document.getElementById("select_color_hair").addEventListener('input', (event) => {
  const colorString = document.getElementById("select_color_hair").value;
  const material_1 = modelViewerColor.model.materials[9];
  const material_2 = modelViewerColor.model.materials[10];
  const material_3 = modelViewerColor.model.materials[12];
  material_1.pbrMetallicRoughness.setBaseColorFactor(colorString);
  material_2.pbrMetallicRoughness.setBaseColorFactor(colorString);
  material_3.pbrMetallicRoughness.setBaseColorFactor(colorString);
});

document.getElementById("select_color_eye").addEventListener('input', (event) => {
  const colorString = document.getElementById("select_color_eye").value;
  const material = modelViewerColor.model.materials[5];
  material.pbrMetallicRoughness.setBaseColorFactor(colorString);
});

document.getElementById("select_color_cube").addEventListener('input', (event) => {
  const colorString = document.getElementById("select_color_cube").value;
  const material = modelViewerColor.model.materials[13];
  material.pbrMetallicRoughness.setBaseColorFactor(colorString);
});

document.getElementById("select_color_ribbon").addEventListener('input', (event) => {
  const colorString = document.getElementById("select_color_ribbon").value;
  const material = modelViewerColor.model.materials[1];
  material.pbrMetallicRoughness.setBaseColorFactor(colorString);
});
      
document.getElementById("select_color_lace").addEventListener('input', (event) => {
  const colorString = document.getElementById("select_color_lace").value;
  const material = modelViewerColor.model.materials[4];
  material.pbrMetallicRoughness.setBaseColorFactor(colorString);
});

document.getElementById("select_color_cover").addEventListener('input', (event) => {
  const colorString = document.getElementById("select_color_cover").value;
  const material = modelViewerColor.model.materials[3];
  material.pbrMetallicRoughness.setBaseColorFactor(colorString);
});

async function exportGLB(){
  const modelViewer = document.getElementById("normal");
  const glTF = await modelViewer.exportScene();
  const file = new File([glTF], "export.glb");
  const link = document.createElement("a");
  link.download =file.name;
  link.href = URL.createObjectURL(file);
  link.click();
}