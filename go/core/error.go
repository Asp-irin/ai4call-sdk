package core

type Ai4callError struct {
	IsAi4callError bool
	Sdk              string
	Code             string
	Msg              string
	Ctx              *Context
	Result           any
	Spec             any
}

func NewAi4callError(code string, msg string, ctx *Context) *Ai4callError {
	return &Ai4callError{
		IsAi4callError: true,
		Sdk:              "Ai4call",
		Code:             code,
		Msg:              msg,
		Ctx:              ctx,
	}
}

func (e *Ai4callError) Error() string {
	return e.Msg
}
