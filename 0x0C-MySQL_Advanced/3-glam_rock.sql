-- 3. Old school band
-- all bands with Glam rock as their main style, ranked by their longevity
-- Column names must be: band_name and lifespan (in years)
-- You should use attributes formed and split for computing the lifespan
SELECT band_name, (IFNULL(split, 2020) - formed) AS lifespan
FROM metal_bands
WHERE LOCATE('Glam rock', style) > 0
