#!/bin/bash

directories=(
    "actualidad"
    "conocenos"
    "fotogaleria"
    "aviso-legal"
    "proyectos"
    "politica-de-privacidad"
    "contacto"
    "certificados"
    "proyectos/dps25"
    "proyectos/dps24"
    "proyectos/tejiendo-historia"
    "proyectos/sonrisas-navideñas"
)

for dir in "${directories[@]}"; do
    mkdir -p "$dir"
    cp index.html "$dir"
done

echo "Directorios creados y archivos copiados correctamente."
