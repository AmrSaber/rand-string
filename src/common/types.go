package common

func ToArr[F, T any](from []F) []T {
	results := make([]T, len(from))
	for i, value := range from {
		results[i] = any(value).(T)
	}

	return results
}
