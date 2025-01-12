export async function uploadFile(file) {
  const formData = new FormData();
  formData.append("file", file); // Adiciona o arquivo
  formData.append("upload_preset", import.meta.env.VITE_UPLOAD_PRESET_NAME);
  formData.append("cloud_name", import.meta.env.VITE_UPLOAD_CLOUD_NAME); // Nome do seu Cloudinary
  console.log(file, formData);
  try {
    const response = await fetch(
      `https://api.cloudinary.com/v1_1/${
        import.meta.env.VITE_UPLOAD_CLOUD_NAME
      }/raw/upload`,
      {
        method: "POST",
        body: formData,
      }
    );

    const data = await response.json();

    return data.secure_url;
  } catch (error) {
    throw new Error(error.message);
  }
}
